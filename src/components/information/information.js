import { SectionTitle } from "../sectionTitle/section-title"
import './information.scss'


export function Info() {
    return (
        <div className="infos">
            <SectionTitle text="Languages" />
            <div className="languages-info">
                <span><img src="./assets/usa.png" alt="Flag of USA" /> EN - Beginner</span>
                <span><img src="./assets/br.png" alt="Flag of Brazil" /> PT-BR - Native Speaker</span>
            </div>
            <SectionTitle text="Education" />
            <div className="educational-info">
                <span>🎓</span>
                <span>Analysis and Systems Development - Fundação Visconde de Cairu <br/> IT and Systems Analyst - Prepara Cursos Profissionalizantes</span>
                
            </div>
        </div>
    );
}