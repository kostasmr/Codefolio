import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function ScrapbookAnimation({
    as: Component,
    positions,
    delay = 0,
    interval = 300,
    style = {},
    children,
    ...rest
}) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
        const anim = setInterval(() => {
            setStep((prev) => (prev < positions.length - 1 ? prev + 1 : prev));
        }, interval);
        return () => clearInterval(anim);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [delay, interval, positions.length]);

    const { top, left, x = 0, y = 0, rotate = 0 } = positions[step];

    return (
        <Component
            {...rest}
            position="absolute"
            top={top}
            left={left}
            style={{
                ...style,
                transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                transition: "none",
            }}
        >
            {children}
        </Component>
    );
}

ScrapbookAnimation.propTypes = {
    as: PropTypes.elementType.isRequired,
    positions: PropTypes.arrayOf(
        PropTypes.shape({
        top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        x: PropTypes.number,
        y: PropTypes.number,
        rotate: PropTypes.number,
        })
    ).isRequired,
    delay: PropTypes.number,
    interval: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.node,
};
