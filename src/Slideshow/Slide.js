import React, { memo } from "react";

const s = {
    container: "abs full ",
    slideImage: "full imgCover"
};

const Slide = ({ position, transition, image }) => {
    return (
        <div className={s.container + " " + position + " " + transition}>
            <img src={image} className={s.slideImage} alt="slide" />
        </div>
    );
};

export default memo(Slide);
