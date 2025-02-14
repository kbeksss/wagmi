import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";

const iconifyClasses = {
    root: "inline-flex shrink-0",
    flag: "flag-icon-class",
};

const Iconify = forwardRef(
    ({ className, width = 20, style, ...other }, ref) => (
        <Icon
            ref={ref}
            className={clsx(iconifyClasses.root, className)}
            style={{
                width,
                height: width,
                ...style,
            }}
            {...other}
        />
    ),
);

export default Iconify;