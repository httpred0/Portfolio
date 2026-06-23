// One-off: rasterize public/favicon.svg into a multi-size favicon.ico
// (ICO entries embed PNGs, supported since Vista). Run: node scripts/gen-favicon.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SVG = path.join(process.cwd(), 'public', 'favicon.svg');
const OUT = path.join(process.cwd(), 'public', 'favicon.ico');
const sizes = [16, 32, 48, 64];

(async () => {
	const pngs = await Promise.all(
		sizes.map((s) =>
			sharp(SVG).resize(s, s).png().toBuffer().then((data) => ({ s, data }))
		)
	);

	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0); // reserved
	header.writeUInt16LE(1, 2); // type: icon
	header.writeUInt16LE(pngs.length, 4); // image count

	let offset = 6 + pngs.length * 16;
	const entries = [];
	for (const { s, data } of pngs) {
		const e = Buffer.alloc(16);
		e.writeUInt8(s >= 256 ? 0 : s, 0); // width
		e.writeUInt8(s >= 256 ? 0 : s, 1); // height
		e.writeUInt8(0, 2); // palette
		e.writeUInt8(0, 3); // reserved
		e.writeUInt16LE(1, 4); // color planes
		e.writeUInt16LE(32, 6); // bits per pixel
		e.writeUInt32LE(data.length, 8); // size of image data
		e.writeUInt32LE(offset, 12); // offset
		offset += data.length;
		entries.push(e);
	}

	const ico = Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
	fs.writeFileSync(OUT, ico);
	console.log(`Wrote ${OUT} (${ico.length} bytes, sizes: ${sizes.join(', ')})`);
})();
