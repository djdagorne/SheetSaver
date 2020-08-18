/* eslint-disable */
import React, { useState, useContext } from 'react';
// import './SheetPage.css';

function SheetPage(){
    return(
        <>
            <div class="section dice-roll">
                <h2>dice roller</h2>
                <div class="dice-result">result</div>
                <select>
                    <option>select dice</option>
                    <option>d20</option>
                    <option>d10</option>
                </select>
                <div>
                    <button class="add-button">add dice</button>
                    <button class="add-button">remove dice</button>
                </div>
                    <button class="roll-button" >roll!</button>
            </div>
            <div class="section details-section">
                <button class="edit-button">save</button>
                <h2 class="section-name">details (in edit mode)</h2>
                <div class="details-data-section">
                    <div class="details-block hitpoints">
                        <input class="input" type="number" placeholder="30"></input>
                        <div>current hitpoints</div>
                    </div>
                    <div class="details-block">
                        <input class="input" type="number" placeholder="15"></input>
                        <div>armor</div>
                    </div>
                    <div class="details-block">
                        <input class="input" type="number" placeholder="+3"></input>
                        <div>initiative</div>
                    </div>
                    <div class="details-block">
                        <input class="input" type="number" placeholder="30"></input>
                        <div>feet/turn</div>
                    </div>
                    <div class="details-block">
                        <input class="input" type="text" placeholder="1"></input>
                        <div>hit dice</div>
                    </div>
                    <div class="saving-throws-detail">
                        <div class="details-block">
                            <input type="checkbox"></input>
                            <input type="checkbox"></input>
                            <input type="checkbox"></input>
                            <div>saving throws successes</div>
                        </div>
                        <div class="details-block">
                            <input type="checkbox"></input>
                            <input type="checkbox"></input>
                            <input type="checkbox"></input>
                            <div>saving throws failures</div>
                        </div>
                    </div>
                    <div class="details-block">
                        <input type="checkbox"></input>
                        <div>inspiration</div>
                    </div>
                    <div class="details-block">
                        <input class="input" type="text" placeholder="2"></input>
                        <div>proficiency bonus</div>
                    </div>
                </div>
            </div>
            <div class="section stat-section">
                <button class="edit-button">edit</button>
                <h2 class="section-name">stats</h2>
                <div class="stat-data-section">
                    <div class="stat-block">
                        <div>+2</div>
                        <div>
                            <div>14</div>
                            <div>strength</div>
                        </div>
                    </div>
                    <div class="stat-block">
                        <div>+3</div>
                        <div>
                            <div>15</div>
                            <div>dexterity</div>
                        </div>
                    </div>
                    <div class="stat-block">
                        <div>+2</div>
                        <div>
                            <div>15</div>
                            <div>constitution</div>
                        </div>
                    </div>
                    <div class="stat-block">
                        <div>+0</div>
                        <div>
                            <div>10</div>
                            <div>intelligence</div>
                        </div>
                    </div>
                    <div class="stat-block">
                        <div>+1</div>
                        <div>
                            <div>13</div>
                            <div>wisdom</div>
                        </div>
                    </div>
                    <div class="stat-block">
                        <div>-1</div>
                        <div>
                            <div>9</div>
                            <div>charisma</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section saving-section">
                <button class="edit-button">edit</button>
                <h2 class="section-name">saving throws</h2>
                <div class="saving-data-section">
                    <div class="saving-block">
                        <input type="checkbox" checked></input>
                        <div>
                            <div>+4</div>
                            <div>strength</div>
                        </div>
                    </div>
                    <div class="saving-block">
                        <input type="checkbox" ></input>
                        <div>
                            <div>+3</div>
                            <div>dexterity</div>
                        </div>
                    </div>
                    <div class="saving-block">
                        <input type="checkbox" checked></input>
                        <div>
                            <div>+4</div>
                            <div>constitution</div>
                        </div>
                    </div>
                    <div class="saving-block">
                        <input type="checkbox" ></input>
                        <div>
                            <div>+0</div>
                            <div>intelligence</div>
                        </div>
                    </div>
                    <div class="saving-block">
                        <input type="checkbox" ></input>
                        <div>
                            <div>+1</div>
                            <div>wisdom</div>
                        </div>
                    </div>
                    <div class="saving-block">
                        <input type="checkbox" ></input>
                        <div>
                            <div>-1</div>
                            <div>charisma</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section skills-section">
                <button class="edit-button">edit</button>
                <h2 class="section-name">skills</h2>
                <div class="skills-data-section">
                    <div class="skills-block">
                        <input type="checkbox" ></input>
                        <div  class="inline-skills">
                            <div>+3</div>
                            <div>acrobatics</div>
                            <div>(DEX)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox" checked></input>
                        <div class="inline-skills">
                            <div>+3</div>
                            <div>animal handling</div>
                            <div>(WIS)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div  class="inline-skills">
                            <div>+0</div>
                            <div>arcana</div>
                            <div>(INT)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div  class="inline-skills">
                            <div>+2</div>
                            <div>athletics</div>
                            <div>(STR)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div  class="inline-skills">
                            <div>-1</div>
                            <div>deception</div>
                            <div>(CHA)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox" checked></input>
                        <div  class="inline-skills">
                            <div>+2</div>
                            <div>history</div>
                            <div>(INT)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>+1</div>
                            <div>insight</div>
                            <div>(WIS)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>-1</div>
                            <div>intimidation</div>
                            <div>(CHA)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>+0</div>
                            <div>investigation</div>
                            <div>(INT)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>+1</div>
                            <div>medicine</div>
                            <div>(WIS)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>+0</div>
                            <div>nature</div>
                            <div>(INT)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox" checked></input>
                        <div class="inline-skills">
                            <div>+0</div>
                            <div>perception</div>
                            <div>(WIS)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>-1</div>
                            <div>performance</div>
                            <div>(CHA)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>-1</div>
                            <div>persuasion</div>
                            <div>(CHA)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>+0</div>
                            <div>religion</div>
                            <div>(INT)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>+3</div>
                            <div>sleight of hand</div>
                            <div>(DEX)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox"></input>
                        <div class="inline-skills">
                            <div>+3</div>
                            <div>stealth</div>
                            <div>(DEX)</div>
                        </div>
                    </div>
                    <div class="skills-block">
                        <input type="checkbox" checked></input>
                        <div class="inline-skills">
                            <div>+3</div>
                            <div>survival</div>
                            <div>(WIS)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section lang-section">
                <button class="edit-button">edit</button>
                <h2>proficiencies and languages</h2>
                <div class="lang-data-section">
                    <div>
                        <h3>proficiencies</h3>
                        <div class="lang-block">
                            All armor, shields, simple weapons, carpenter tools, vehicles, martial weapons
                        </div>
                    </div>
                    <div>
                        <h3>languages</h3>
                        <div class="lang-block">
                            Common, Elvish
                        </div>
                    </div>
                </div>
            </div>
            <div class="section eqpt-section">
                <button class="edit-button">edit</button>
                <h2 class="section-name">equiptment</h2>
                <div class="eqpt-data-section">
                    <h3>wallet</h3>
                    <div class="currency-block">
                        <div>
                            <div>0</div>
                            <div>CP</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>SP</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>EP</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>GP</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>PP</div>
                        </div>
                    </div>
                    <h3>equiptment</h3>
                    <div class="eqpt-block">
                        leather armor, longbow, 20 arrows, greatsword, backpack, bedroll, mess kit, tinderbox, 10 torches, 10 days of rations, waterskin, 50 feet of rope, carpenters tools, shovel, iron pot, set of common clothes, pouch
                    </div>
                </div>
            </div>
            <div class="section attack-section">
                <button class="edit-button">edit</button>
                <h2 class="section-name">attacks and spellcasting</h2>
                <div class="attack-data-section">
                    <div class="attack-block">
                        <h3>name</h3>
                        <h3>bonus</h3>
                        <h3>damage/type</h3>
                    </div>
                    <div class="attack-block">
                        <div>Greatsword</div>
                        <div>+3</div>
                        <div>2d6 + 3 slashing</div>
                    </div>
                    <div class="attack-block">
                        <div>Longbow</div>
                        <div>+3</div>
                        <div>1d8 + 3 piercing</div>
                    </div>
                </div>
            </div>
            <div class="section bio-section">
                <button class="edit-button">edit</button>
                <h2>character bio</h2>
                <div class="bio-data-section">
                    <div>
                        <h3>personality</h3>
                        <div class="bio-block">
                            When i set my mind to something, i follow through. Also, I use long words in an attempt to sound smarter.
                        </div>
                    </div>
                    <div>
                        <h3>ideals</h3>
                        <div  class="bio-block">
                            Sincerity. It's no good pretending to be something I'm not.
                        </div>
                    </div>
                    <div>
                        <h3>bonds</h3>
                        <div class="bio-block">
                            One day, Thundertree will be a prosperous town again. A statue of me will stand in the town square. 
                        </div>
                    </div>
                    <div>
                        <h3>flaws</h3>
                        <div class="bio-block">
                            I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.
                        </div>
                    </div>
                </div>
            </div>
            <div class="section trait-section">
                <button class="edit-button">edit</button>
                <h2>features and traits</h2>
                <div class="trait-data-section">
                    <div>
                        <h3>Second Wind</h3>
                        <div class="trait-block">
                            You have a limited well of stamina you can draw on to protect yourself from harm. You can use a bonus action to regain hit points equal to a 1d10 + your fighter level. Once you use this feature you must finish a short or long rest before you can use it again.
                        </div>
                    </div>
                    <div>
                        <h3>Fighting Style (Archery)</h3>
                        <div class="trait-block">
                            You gain a +2 bonus to attack rolls you make with ranged weapons. This bonus is already included in your attack with your longbow.
                        </div>
                    </div>
                    <div>
                        <h3>Rustic Hospitality</h3>
                        <div class="trait-block">
                            Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They shield you from the law or anyone else searching for you, though they are unwilling to risk their lives for you.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SheetPage;