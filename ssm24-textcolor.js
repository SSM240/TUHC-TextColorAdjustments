const normalColorReplacements = {
    "#4ac925": "#2cc200",  // jade/erisolsprite
    "#000056": "#001999",  // equius
    "#2b0057": "#4f0088",  // gamzee
    "#6a006a": "#830083",  // eridan
    "#77003c": "#9c004a",  // feferi/meenah
    "#00d5f2": "#00a6d1",  // jane/nannasprite
    "#f2a400": "#f28e00",  // dirk/davesprite
    "#1f9400": "#1d8900",  // jake/jadesprite (mostly for better contrast against jade/erisol's new color)
    "#ff6ff2": "#f141ef",  // roxy
    "#2ed73a": "#2bca36",  // post-domination caliborn (also felt names i guess lol)
}

const scratchColorReplacements = {
    "#0715cd": "#1d29cf",  // john
    "#e00707": "#e01f1f",  // dave
    "#626262": "#707070",  // karkat
    "#4200b0": "#541cb0",  // gamzee
    // below are for consistency
    "#4ac925": "#2cc200",  // jade
    "#00d5f2": "#00a6d1",  // nannasprite
    "#f2a400": "#f28e00",  // davesprite
}

module.exports = {
    title: "Text color adjustments",
    summary: "Adjustments to characters' text colors for easier reading",
    author: "SSM24",
    modVersion: 1.01,

    description: 
        `<p>This mod adjusts character text colors to be easier on the eyes against the default backgrounds, 
        as well as more distinct from one another in certain cases.</p>
        <p>More info can be found <a href="https://github.com/SSM240/TUHC-TextColorAdjustments">on GitHub</a>.</p>`,
    
    edit(archive) {
        for (let i = 1926; i < 9999; i++) {
            // do nothing in trickster mode because eye strain is part of the experience :^)
            if (i >= 7614 && i <= 7677) {
                continue;
            }

            const colorDict = (i >= 5664 && i <= 5981) ? scratchColorReplacements : normalColorReplacements;
            const pageString = `00${i}`;
            
            // if the page exists
            if (archive.mspa.story[pageString]) {
                let content = archive.mspa.story[pageString].content;
                let replaced = false;
                // check if page includes each color
                for (let origColor in colorDict) {
                    if (content.includes(origColor)) {
                        replaced = true;
                        const origColorRegExp = new RegExp(origColor, 'g');
                        const newColor = colorDict[origColor];
                        content = content.replace(origColorRegExp, newColor)
                    }
                }
                if (replaced) {
                    archive.mspa.story[pageString].content = content
                }
            }
        }
    }

}