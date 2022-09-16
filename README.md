# Text Color Adjustments
A mod for [The Unofficial Homestuck Collection](https://bambosh.github.io/unofficial-homestuck-collection/) that adjusts certain characters' text colors for easier reading.

## Installation
[Download the mod file](https://raw.githubusercontent.com/SSM240/TUHC-TextColorAdjustments/main/ssm24-textcolor.js) (if this link doesn't begin a download, simply press Ctrl+S, or right click -> `Save As`) and place it in your mods directory. Then simply enable it within the program.

## Details
Generally, this mod:
- darkens some of the lighter-colored text to make it less straining to read against the default background
    - also lightens some of the dark colors in Scratch mode for the same purpose
- brightens some of the particularly dark colors to make them more distinct from one another, so conversations between the highbloods are less painful to read

For a full list of changes, [the mod's code](/ssm24-textcolor.js) has all the replacements cleanly listed at the top of the file.

Other notes:
- This mod assumes you're using the default theme without any overrides. The changes may not be as much of an improvement with other themes.
- This mod only changes text data, and makes no attempt to change anything in panels, inline text images, or Flashes.
    - As such, it also disables itself during Trickster Mode, since that section uses a mix of normal text and images. (And also I feel like trying to make things more legible during that section loses part of the experience :p)
- Doc Scratch's text color is unchanged since his text being near-invisible is also part of the experience.

## Please let me know if I've overlooked anything

I haven't tested this mod thoroughly (other than to make sure the changes I made are functional), so it's possible that I've overlooked something somewhere. Please [open an issue](https://github.com/SSM240/TUHC-TextColorAdjustments/issues) or contact me on Discord (SSM24#0079) if you have any feedback.
