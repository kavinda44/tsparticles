import type { Container, IOptions, Options } from "@tsparticles/engine";
import type {
    SVGPathSegArcAbs,
    SVGPathSegArcRel,
    SVGPathSegCurvetoCubicAbs,
    SVGPathSegCurvetoCubicRel,
    SVGPathSegCurvetoCubicSmoothAbs,
    SVGPathSegCurvetoCubicSmoothRel,
    SVGPathSegCurvetoQuadraticAbs,
    SVGPathSegCurvetoQuadraticRel,
    SVGPathSegCurvetoQuadraticSmoothAbs,
    SVGPathSegCurvetoQuadraticSmoothRel,
    SVGPathSegLinetoAbs,
    SVGPathSegLinetoRel,
    SVGPathSegMovetoAbs,
    SVGPathSegMovetoRel,
} from "./pathseg.js";
import type { IPolygonMask } from "./Options/Interfaces/IPolygonMask.js";
import type { PolygonMask } from "./Options/Classes/PolygonMask.js";

export type SvgAbsoluteCoordinatesTypes =
    | SVGPathSegArcAbs
    | SVGPathSegCurvetoCubicAbs
    | SVGPathSegCurvetoCubicSmoothAbs
    | SVGPathSegCurvetoQuadraticAbs
    | SVGPathSegCurvetoQuadraticSmoothAbs
    | SVGPathSegLinetoAbs
    | SVGPathSegMovetoAbs;

export type SvgRelativeCoordinatesTypes =
    | SVGPathSegArcRel
    | SVGPathSegCurvetoCubicRel
    | SVGPathSegCurvetoCubicSmoothRel
    | SVGPathSegCurvetoQuadraticRel
    | SVGPathSegCurvetoQuadraticSmoothRel
    | SVGPathSegLinetoRel
    | SVGPathSegMovetoRel;

export type IPolygonMaskOptions = IOptions & {
    polygon: IPolygonMask;
};

export type PolygonMaskOptions = Options & {
    polygon?: PolygonMask;
};

export type PolygonMaskContainer = Container & {
    actualOptions: PolygonMaskOptions;
};
