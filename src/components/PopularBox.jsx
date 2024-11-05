import React from "react";
import pencil from "../assets/img/pencil.png";
import eraser from "../assets/img/eraser.png";
import ruler from "../assets/img/ruler.png";
import colors from "../assets/img/colors.png";


const ProjectsBox = () => {
    return <section className="section" id="project">
        <div className="top-header">
            <h1>สินค้า</h1>
        </div>
        <div className="project-container">
            <div className="project-box">
                <div className="project-box-image">
                    <img src={pencil} alt="avatar" />
                </div>
                <h3>ดินสอ</h3>
                    <p>$5</p>
                    <i class="uil uil-shopping-cart-alt"></i>
            </div>
            <div className="project-box">
                <div className="project-box-image">
                    <img src={eraser} alt="avatar" />
                </div>
                <h3>ยางลบ</h3>
                    <p>$5</p>
                    <i class="uil uil-shopping-cart-alt"></i>
            </div><div className="project-box">
                <div className="project-box-image">
                    <img src={ruler} alt="avatar" />
                </div>
                <h3>ไม้บรรทัด</h3>
                    <p>$5</p>
                    <i class="uil uil-shopping-cart-alt"></i>
            </div>
            <div className="project-box">
                <div className="project-box-image">
                    <img src={colors} alt="avatar" />
                </div>
                <h3>สีไม้</h3>
                    <p>$5</p>
                    <i class="uil uil-shopping-cart-alt"></i>
                    </div>
        </div>
    </section>

}
export default ProjectsBox;
