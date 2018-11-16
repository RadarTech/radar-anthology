// --- Imports -------------------------------------------------------------- //

// Internal
import {
  RadarBaseColorName,
  RadarColorClassTarget,
  RadarColorHexValue,
  RadarColorName,
} from './types';

// --- Internal helpers ----------------------------------------------------- //

function colorAdjToEnumKey(colorAdj: string) {
  return (
    colorAdj
      // Create array of parts
      .split('-')
      // Capitalize
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      // Join result with no spaces, i.e.: `dark-fg` => `DarkFg`
      .join('')
  );
}

// --- Color helper classes ------------------------------------------------- //

export class RadarClientColor<
  ClassTarget,
  Color extends RadarColorName | RadarBaseColorName
> {
  public color: Color;
  public classTarget: ClassTarget;

  constructor(color: Color, classTarget?: ClassTarget) {
    this.classTarget = classTarget;
    this.color = color;
  }

  get class(): string {
    return `${this.classTarget}-${this.color}`;
  }

  get hex(): RadarColorHexValue {
    const shade = colorAdjToEnumKey(this.color);
    return RadarColorHexValue[shade];
  }
}

export class RadarClientBaseColor<
  ClassTarget,
  Color extends RadarBaseColorName
> extends RadarClientColor<ClassTarget, Color> {
  constructor(color: RadarBaseColorName, classTarget: ClassTarget) {
    super(color as any, classTarget);
  }

  get backgroundClass(): string {
    return `${this.class}-bg`;
  }

  get midgroundClass() {
    return `${this.class}-mg`;
  }

  get groundClass() {
    return this.class;
  }

  get foregroundClass() {
    return `${this.class}-fg`;
  }

  get background(): string {
    return `${this.color}-bg`;
  }

  get midground() {
    return `${this.color}-mg`;
  }

  get ground() {
    return this.color;
  }

  get foreground() {
    return `${this.color}-fg`;
  }
}

// --- Generic color factory ------------------------------------------------ //

export interface RadarColorFactory<T extends RadarColorClassTarget> {
  <K extends RadarBaseColorName>(color: K): RadarClientBaseColor<T, K>;
  <K extends RadarColorName>(color: K): RadarClientColor<T, K>;
}

function genericColorFactory<T extends RadarColorClassTarget>(
  classTarget: T,
): RadarColorFactory<T> {
  return color => {
    const isBaseColor = Object.values(RadarBaseColorName).includes(color);
    const isColor = Object.values(RadarColorName).includes(color);

    if (isBaseColor) {
      return new RadarClientBaseColor<T, typeof color>(
        color as RadarBaseColorName,
        classTarget,
      ) as any;
    }

    if (isColor) {
      return new RadarClientColor<T, typeof color>(
        color as RadarColorName,
        classTarget,
      ) as any;
    }

    throw new Error(
      `No such Radar color adjective found. Received: '${color}'`,
    );
  };
}

// --- Specified color factories -------------------------------------------- //

export const createColor = genericColorFactory(RadarColorClassTarget.Color);

export const createBackgroundColor = genericColorFactory(
  RadarColorClassTarget.BackgroundColor,
);

export const createBorderColor = genericColorFactory(
  RadarColorClassTarget.BorderColor,
);
export const createBorderTopColor = genericColorFactory(
  RadarColorClassTarget.BorderTopColor,
);
export const createBorderRightColor = genericColorFactory(
  RadarColorClassTarget.BorderRightColor,
);
export const createBorderBottomColor = genericColorFactory(
  RadarColorClassTarget.BorderBottomColor,
);
export const createBorderLeftColor = genericColorFactory(
  RadarColorClassTarget.BorderLeftColor,
);
