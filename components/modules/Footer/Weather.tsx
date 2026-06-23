import { useContext, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import {
	WiCloud,
	WiCloudy,
	WiDayCloudy,
	WiDaySunny,
	WiFog,
	WiRain,
	WiShowers,
	WiSnow,
	WiSprinkle,
	WiThunderstorm,
} from 'react-icons/wi';
import { Context } from '../../../context/ContextProvider';
import { profile } from '../../../config/profile';
import styles from './Weather.module.css';

// Each condition carries a color tuned for the dark taskbar and a deeper,
// still-vibrant variant that reads well on the light taskbar.
type Color = { dark: string; light: string };
type Condition = { label: string; Icon: IconType; color: Color };

const SUN: Color = { dark: '#f5a623', light: '#e08600' };
const CLOUD: Color = { dark: '#c2ccd6', light: '#5b6b7e' };
const RAIN: Color = { dark: '#4aa3df', light: '#1f6fc4' };
const SNOW: Color = { dark: '#9fd3ff', light: '#2f8fd6' };
const STORM: Color = { dark: '#f5c518', light: '#b3760c' };

// Maps WMO weather codes (from open-meteo) to an English label + icon.
const conditionFromCode = (code: number): Condition => {
	if (code === 0) return { label: 'Sunny', Icon: WiDaySunny, color: SUN };
	if (code === 1) return { label: 'Mostly Sunny', Icon: WiDaySunny, color: SUN };
	if (code === 2) return { label: 'Partly Cloudy', Icon: WiDayCloudy, color: SUN };
	if (code === 3) return { label: 'Cloudy', Icon: WiCloudy, color: CLOUD };
	if (code === 45 || code === 48) return { label: 'Foggy', Icon: WiFog, color: CLOUD };
	if (code >= 51 && code <= 57) return { label: 'Drizzle', Icon: WiSprinkle, color: RAIN };
	if (code >= 61 && code <= 67) return { label: 'Rainy', Icon: WiRain, color: RAIN };
	if (code >= 71 && code <= 77) return { label: 'Snow', Icon: WiSnow, color: SNOW };
	if (code >= 80 && code <= 82) return { label: 'Rain Showers', Icon: WiShowers, color: RAIN };
	if (code >= 85 && code <= 86) return { label: 'Snow Showers', Icon: WiSnow, color: SNOW };
	if (code >= 95) return { label: 'Thunderstorm', Icon: WiThunderstorm, color: STORM };
	return { label: 'Clear', Icon: WiCloud, color: CLOUD };
};

function Weather() {
	const { themeState } = useContext(Context);
	const [theme] = themeState;
	const [temp, setTemp] = useState<number | null>(null);
	const [condition, setCondition] = useState<Condition | null>(null);

	useEffect(() => {
		let isMounted = true;
		const { latitude, longitude } = profile.weather;

		(async () => {
			try {
				const res = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius`
				);
				const data = await res.json();
				if (isMounted && data?.current_weather) {
					setTemp(Math.round(data.current_weather.temperature));
					setCondition(
						conditionFromCode(data.current_weather.weathercode)
					);
				}
			} catch {
				// Network/API hiccup — widget simply stays hidden.
			}
		})();

		return () => {
			isMounted = false;
		};
	}, []);

	// Until weather loads, don't render anything in the taskbar.
	if (temp === null || !condition) return null;

	const { Icon, label, color } = condition;
	const iconColor = theme === 'light' ? color.light : color.dark;

	return (
		<div className={styles.weather}>
			<div className={styles.iconWrap}>
				<Icon style={{ color: iconColor }} />
				<span className={styles.badge}>3</span>
			</div>
			<div className={styles.info}>
				<p className={styles.temp}>{temp}°C</p>
				<p className={styles.cond}>{label}</p>
			</div>
		</div>
	);
}

export default Weather;
