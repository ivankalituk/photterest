'use client'
import { FC, useState } from "react";

const RAIL_WIDTH = 70;
const PANEL_WIDTH = 200;

const SideBar: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <aside
            className="
                flex
                h-[100dvh]
                bg-green-500
                transition-[width]
                duration-300
                overflow-hidden
                sticky
                top-0
            "
            style={{
                width: RAIL_WIDTH + (isExpanded ? PANEL_WIDTH : 0),
            }}
        >
            <div
                className="
                    w-[70px]
                    shrink-0
                    flex
                    flex-col
                    items-center
                    py-4
                    border-r
                "
            >
                <button
                    onClick={() => setIsExpanded(prev => !prev)}
                >
                    Expand
                </button>

            </div>

            <div
                className="
                    overflow-hidden
                    shrink-0
                "
                style={{
                    width: PANEL_WIDTH,
                }}
            >
                <div
                    className="
                        h-full
                        transition-transform
                        duration-300
                    "
                    style={{
                        transform: isExpanded
                            ? "translateX(0)"
                            : "translateX(-100%)",
                    }}
                >
                    <div className="p-5">
                        <h2 className="font-bold mb-4">
                            Expanded Content
                        </h2>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;