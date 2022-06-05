# **510.** Combat Damage Step

**510.1.** First, the active player announces how each attacking creature assigns its combat damage, then the defending player announces how each blocking creature assigns its combat damage. This turn-based action doesn’t use the stack. A player assigns a creature’s combat damage according to the following rules:
+ **510.1a** Each attacking creature and each blocking creature assigns combat damage equal to its power. Creatures that would assign 0 or less damage this way don’t assign combat damage at all.
+ **510.1b** An unblocked creature assigns its combat damage to the player or planeswalker it’s attacking. If it isn’t currently attacking anything (if, for example, it was attacking a planeswalker that has left the battlefield), it assigns no combat damage.
+ **510.1c** A blocked creature assigns its combat damage to the creatures blocking it. If no creatures are currently blocking it (if, for example, they were destroyed or removed from combat), it assigns no combat damage. If exactly one creature is blocking it, it assigns all its combat damage to that creature. If two or more creatures are blocking it, it assigns its combat damage to those creatures according to the damage assignment order announced for it. This may allow the blocked creature to divide its combat damage. However, it can’t assign combat damage to a creature that’s blocking it unless, when combat damage assignments are complete, each creature that precedes that blocking creature in its order is assigned lethal damage. When checking for assigned lethal damage, take into account damage already marked on the creature and damage from other creatures that’s being assigned during the same combat damage step, but not any abilities or effects that might change the amount of damage that’s actually dealt. An amount of damage that’s greater than a creature’s lethal damage may be assigned to it.

      Example: The damage assignment order of an attacking Vastwood Gorger (a 5/6 creature) is Pride Guardian (a 0/3 creature) then Llanowar Elves (a 1/1 creature). Vastwood Gorger can assign 3 damage to the Guardian and 2 damage to the Elves, 4 damage to the Guardian and 1 damage to the Elves, or 5 damage to the Guardian.

      Example: The damage assignment order of an attacking Vastwood Gorger (a 5/6 creature) is Pride Guardian (a 0/3 creature) then Llanowar Elves (a 1/1 creature). During the declare blockers step, the defending player casts Giant Growth targeting Pride Guardian, which gives it +3/+3 until end of turn. Vastwood Gorger must assign its 5 damage to the Guardian.

      Example: The damage assignment order of an attacking Vastwood Gorger (a 5/6 creature) is Pride Guardian (a 0/3 creature) then Llanowar Elves (a 1/1 creature). During the declare blockers step, the defending player casts Mending Hands targeting Pride Guardian, which prevents the next 4 damage that would be dealt to it. Vastwood Gorger can assign 3 damage to the Guardian and 2 damage to the Elves, 4 damage to the Guardian and 1 damage to the Elves, or 5 damage to the Guardian.

      Example: The damage assignment order of an attacking Enormous Baloth (a 7/7 creature) is Trained Armodon (a 3/3 creature) that already has 2 damage marked on it, then Foriysian Brigade (a 2/4 creature that can block an additional creature), then Silverback Ape (a 5/5 creature). The damage assignment order of an attacking Durkwood Boars (a 4/4 creature) is the same Foriysian Brigade, then Goblin Piker (a 2/1 creature). Among other possibilities, the active player may have the Baloth assign 1 damage to the Armodon, 1 damage to the Brigade, and 5 damage to the Ape, and have the Boars assign 3 damage to the Brigade and 1 damage to the Piker.
+ **510.1d** A blocking creature assigns combat damage to the creatures it’s blocking. If it isn’t currently blocking any creatures (if, for example, they were destroyed or removed from combat), it assigns no combat damage. If it’s blocking exactly one creature, it assigns all its combat damage to that creature. If it’s blocking two or more creatures, it assigns its combat damage to those creatures according to the damage assignment order announced for it. This may allow the blocking creature to divide its combat damage. However, it can’t assign combat damage to a creature that it’s blocking unless, when combat damage assignments are complete, each creature that precedes that blocked creature is assigned lethal damage. When checking for assigned lethal damage, take into account damage already marked on the creature and damage from other creatures that’s being assigned during the same combat damage step, but not any abilities or effects that might change the amount of damage that’s actually dealt. An amount of damage that’s greater than a creature’s lethal damage may be assigned to it.
+ **510.1e** Once a player has assigned combat damage from each attacking or blocking creature they control, the total damage assignment (not solely the damage assignment of any individual attacking or blocking creature) is checked to see if it complies with the above rules. If it doesn’t, the combat damage assignment is illegal; the game returns to the moment before that player began to assign combat damage. (See rule 727, “Handling Illegal Actions.”)

**510.2.** Second, all combat damage that’s been assigned is dealt simultaneously. This turn-based action doesn’t use the stack. No player has the chance to cast spells or activate abilities between the time combat damage is assigned and the time it’s dealt.

    Example: Squadron Hawk (a 1/1 creature with flying) and Goblin Piker (a 2/1 creature) are attacking. Mogg Fanatic (a 1/1 creature with the ability “Sacrifice Mogg Fanatic: Mogg Fanatic deals 1 damage to any target.”) blocks the Goblin Piker. The defending player sacrifices Mogg Fanatic during the declare blockers step to deal 1 damage to the Squadron Hawk. The Hawk is destroyed. The Piker deals and is dealt no combat damage this turn. If the defending player instead left Mogg Fanatic on the battlefield, the Fanatic and the Piker would have dealt lethal damage to one another, but the Squadron Hawk couldn’t have been dealt damage.

**510.3.** Third, the active player gets priority. (See rule 117, “Timing and Priority.”)
+ **510.3a** Any abilities that triggered on damage being dealt or while state-based actions are performed afterward are put onto the stack before the active player gets priority; the order in which they triggered doesn’t matter. (See rule 603, “Handling Triggered Abilities.”)

**510.4.** If at least one attacking or blocking creature has first strike (see rule 702.7) or double strike (see rule 702.4) as the combat damage step begins, the only creatures that assign combat damage in that step are those with first strike or double strike. After that step, instead of proceeding to the end of combat step, the phase gets a second combat damage step. The only creatures that assign combat damage in that step are the remaining attackers and blockers that had neither first strike nor double strike as the first combat damage step began, as well as the remaining attackers and blockers that currently have double strike. After that step, the phase proceeds to the end of combat step.