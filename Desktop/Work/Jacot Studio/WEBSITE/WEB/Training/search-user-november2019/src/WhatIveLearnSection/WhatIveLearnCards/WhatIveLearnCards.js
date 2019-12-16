import React, {Component} from 'react';
import './WhatIveLearnCards.scss';
import WhatIveLearnCardList from "../WhatIveLearnCardList/WhatIveLearnCardList";
import {Tip} from '../../../src/constants/what-i-have-learn-mock';
import Screen01 from '../../img/Screen Shot 2019-11-16 at 23.06.14.png';
import Screen02 from '../../img/Screen Shot 2019-11-16 at 23.24.10.png';
import Screen03 from '../../img/Screen Shot 2019-11-16 at 23.33.23.png';
import Screen04 from '../../img/Screen Shot 2019-11-16 at 23.43.35.png';

class WhatIveLearn extends Component {
        render() {
                return (
                    <div className="card">
                        <h1>What I've learned here</h1>
                        <div className="cardsWrapper">
                                <WhatIveLearnCardList tips={Object.values(Tip)}/>
                        </div>
                            <div className="steps">
                                    <ul>
                                            <li>
                                                <h3>1) Créer un fichier pour stocker les données</h3>
                                                <img src={Screen01}/>
                                            </li>
                                            <li>
                                            <h3>2) On valide les types des props du composant WhatIvelearncarditem en important le tableau TipsProptypes</h3>
                                            <img src={Screen02}/>
                                            </li>
                                            <li>
                                            <h3>3) On crée un composant intermédiaire qui va servir seulement à faire le mapping. Ne pas oublier d'importer à nouveaux les propstypes</h3>
                                            <img src={Screen03}/>
                                            </li>
                                        <li>
                                            <h3>4) Object.values() renvoie un tableau dont les éléments sont les valeurs des propriétés énumérables directement rattachées à l'objet passé en argument. L'ordre du tableau est le même que celui obtenu lorsqu'on parcourt les propriétés manuellement. </h3>
                                            <img src={Screen04}/>
                                        </li>
                                    </ul>
                            </div>
                    </div>
                )
        }
}

export default WhatIveLearn;
