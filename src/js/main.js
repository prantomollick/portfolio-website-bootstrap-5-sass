import "../../node_modules/glightbox/dist/css/glightbox.min.css";
// import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import GLightbox from "glightbox";

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        href: "https://www.youtube.com/watch?v=J9lS14nM1xg",
        type: "video",
        source: "youtube", //vimeo, youtube or local
        width: 900
    });

    // const mygalary = GLightbox({
    //     selector: ".glighbox",
    //     elements: [
    //         {
    //             href: "https://www.youtube.com/watch?v=J9lS14nM1xg",
    //             type: "video",
    //             source: "youtube", //vimeo, youtube or local
    //             width: 900
    //         }
    //     ]
    // });

    // mygalary.open();
});
