# Text Color Adjustments
A mod for [The Unofficial Homestuck Collection](https://bambosh.dev/unofficial-homestuck-collection/) that adjusts certain characters' text colors for easier reading against the default themes.

**Please let me know if I've missed something.** I made this mod in a few hours and it relies on fairly crude find & replace of hex color codes, and I haven't tested it thoroughly, so I may have missed some important changes or unintended side effects. Please [open an issue](https://github.com/SSM240/TUHC-TextColorAdjustments/issues) or contact me on Discord (`ssm24`) if you have any feedback.

## Installation
[Download the mod file](https://raw.githubusercontent.com/SSM240/TUHC-TextColorAdjustments/main/ssm24-textcolor.js) (if this link doesn't begin a download, simply press Ctrl+S, or right click -> `Save As`) and place it in your mods directory. Then simply enable it within the program.

## Details
Generally, this mod:
- darkens some of the lighter-colored text to make it less straining to read against the default light background
    - lightens some of the dark colors in sections with a dark background for the same purpose
- brightens some of the particularly dark colors to make them more distinct from one another

Note that this mod:
- **only changes text data,** and makes no attempt to change colors contained in images or Flashes
- **assumes you're using the default theme without overrides.** The changes may not look as good if you're using themes that significantly change the background color.

### :warning: The rest of this readme contains minor Homestuck spoilers, so stop here if you're a new reader and don't want spoilers.

---

For a full list of changes, [the mod's code](/ssm24-textcolor.js) has all the replacements listed at the top of the file.

Other notes:
- Doc Scratch's text color is unchanged since his text being near-invisible has story significance. (And also I don't think blanket replacing every instance of `#ffffff` in the text would be a good idea.)
- This mod disables itself during Trickster Mode, since that section uses a mix of normal text and images so any changes would result in inconsistency. (And also I feel like trying to make things more legible during that section loses part of the experience :p)

## Examples
Before:  
![1 before](https://user-images.githubusercontent.com/5523379/190827858-8c6b61f1-23d7-49e9-8485-1941d35d0470.png)

After:  
![1 after](https://user-images.githubusercontent.com/5523379/190827961-d96e29fd-0f43-4959-865b-e7082e818958.png)

---

Before:  
![2 before](https://user-images.githubusercontent.com/5523379/190827965-4be7ddc1-e34d-4ade-b62e-a7a05e5967d1.png)

After:  
![2 after](https://user-images.githubusercontent.com/5523379/190827970-541f8be4-c196-4450-aab5-96d0dcd7b6c3.png)

---

Before:  
![3 before](https://user-images.githubusercontent.com/5523379/190827975-2a34f901-c2c6-4a1b-896d-f3e242358a8c.png)

After:  
![3 after](https://user-images.githubusercontent.com/5523379/190827979-847410ad-8976-42b9-9e6e-5c4afdcded4f.png)
