import cx from "classnames";
import * as React from "react";
import { FocusRing, useButton, type AriaButtonProps } from "react-aria";

import Alignment from "@igloo-ui/icons/dist/Alignment";
import Checkmark from "@igloo-ui/icons/dist/Checkmark";

import { QuestionIcon } from "@hopper-ui/icons-react16";

import Tooltip from "@igloo-ui/tooltip";
import Score from "./Score";

import "./metric.scss";

export type Appearance = "positive" | "negative" | "selected";
export type MetricType = "score" | "fluctuate" | "subMetric";

export interface MetricProps extends Omit<AriaButtonProps, "type"> {
    /** The appearance of the metric */
    appearance?: Appearance;
    /** Add a specific class to the metric */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** The icon to display */
    icon?: React.ReactElement;
    /** The label or metric name to display */
    label: string;
    /** The tooltip to display */
    tooltip?: string;
    /** The type of metric */
    type?: MetricType;
    /** The value of the metric (Only variation is used for type fluctuate) */
    value?: number | null;
    /** The variation of the metric */
    variation?: number;
}

const Metric: React.FunctionComponent<MetricProps> = ({
    appearance,
    className,
    dataTest,
    icon,
    label,
    tooltip,
    type = "score",
    value,
    variation,
    ...rest
}: MetricProps) => {
    const btnRef = React.useRef<HTMLButtonElement>(null);

    const { buttonProps } = useButton(rest, btnRef);

    const classes = cx("ids-metric", className, {
        [`ids-metric--${appearance}`]: appearance,
        [`ids-metric--${type}`]: type
    });
    const visualClasses = cx("ids-metric__visual", {
        [`ids-metric__visual--${appearance}`]: appearance
    });

    return (
        <FocusRing focusRingClass="keyboard-focus">
            <button
                {...buttonProps}
                className={classes}
                data-test={dataTest}
                ref={btnRef}
            >
                {type === "score" && icon && (
                    <div className={visualClasses}>{icon}</div>
                )}
                <span className="ids-metric__content">
                    <span className="ids-metric__score-group">
                        {type !== "fluctuate" && (
                            <Score value={value} forceDecimal className="ids-metric__score" />
                        )}{" "}
                        <Score
                            value={variation}
                            forceDecimal={type === "fluctuate"}
                            isVariation
                            arrowSize={type === "fluctuate" ? "medium" : "small"}
                            isSelected={appearance === "selected"}
                            hideIfZero={type !== "fluctuate"}
                            className="ids-metric__score"
                        />
                    </span>
                    <span className="ids-metric__name">
                        {type === "fluctuate" && (
                            <Alignment size="small" className="ids-metric__alignment-icon" />
                        )}
                        {label}
                    </span>
                </span>
                {(tooltip || type !== "subMetric") && (
                    <span
                        className={cx("ids-metric__status", {
                            "ids-metric__status--tooltip":
                tooltip && appearance !== "selected"
                        })}
                    >
                        {tooltip && appearance !== "selected" && (
                            <Tooltip content={tooltip}>
                                <QuestionIcon size="sm" />
                            </Tooltip>
                        )}
                        {type !== "subMetric" && appearance === "selected" && (
                            <Checkmark size="small" className="ids-metric__checkmark" />
                        )}
                    </span>
                )}
            </button>
        </FocusRing>
    );
};

export default Metric;
