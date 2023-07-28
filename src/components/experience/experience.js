import { SectionTitle } from "../sectionTitle/section-title";
import './experience.scss'


export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>1 year and half as a Software Developer, in companys such as Visconde de Cairu and SoftPlan</p>
            <div className="experience-time">
                <div className="exp-lang">
                    <img
                        src="/assets/react-novo.png"
                        alt="JavaScript Logo"
                        width={40}
                        height={40}
                        priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>One year</span>
                        </div>
                    </div>
                </div>
                <div className="exp-lang">
                    <img
                        src="/assets/js.png"
                        alt="JavaScript Logo"
                        width={40}
                        height={40}
                        priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                            <span>One year and half</span>
                        </div>
                    </div>
                </div>
                <div className="exp-lang">
                    <img
                        src="/assets/ts.png"
                        alt="TypeScript Logo"
                        width={40}
                        height={40}
                        priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>6 months</span>
                        </div>
                    </div>
                </div>
                <div className="exp-lang">
                    <img
                        src="/assets/java-ve.png"
                        alt="Java Logo"
                        width={40}
                        height={40}
                        priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                            <span>One year and half</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}