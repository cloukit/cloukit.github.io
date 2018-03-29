import { CloukitToggleComponentThemeDefault } from '@cloukit/toggle';


export class SmiggleTheme extends CloukitToggleComponentThemeDefault {
  constructor() {
    super();
    const wrapperToggledBase = this.getElementTheme('wrapper', 'toggled', 'base').styleDef;
    wrapperToggledBase.style.backgroundColor = '#67069C';

    const wrapperToggledHover = this.getElementTheme('wrapper', 'toggled', 'hover').styleDef;
    wrapperToggledHover.style.backgroundColor = '#903CBE';

    const smileyChan = `M256 474c-120.398 0-218-97.602-218-218S135.602
    38 256 38s218 97.602 218 218-97.602 218-218 218zm-83-242c20.435 0
    37-16.565 37-37s-16.565-37-37-37-37 16.565-37 37 16.565 37 37
    37zm163 0c20.435 0 37-16.565 37-37s-16.565-37-37-37-37 16.565-37 37
    16.565 37 37 37zm-197 73v41c39 34.91 78 52.367 117 52.367S334 380.91
    373 346v-41c-39.24 24.443-78.24 36.664-117 36.664-38.76 0-77.76-12.22-117-36.664z`;

    const iconLeftToggledBase = this.getElementTheme('iconLeft', 'toggled', 'base').styleDef;
    iconLeftToggledBase.icon.svgPathD = smileyChan;
    iconLeftToggledBase.icon.svgStyle = {
      fill: '#fff',
      fillRule: 'evenodd',
    };

    const iconLeftToggledHover = this.getElementTheme('iconLeft', 'toggled', 'hover').styleDef;
    iconLeftToggledHover.icon.svgPathD = smileyChan;
  }
}
