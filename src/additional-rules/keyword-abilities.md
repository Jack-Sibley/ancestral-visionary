# **702.** Keyword Abilities

**702.1.** Most abilities describe exactly what they do in the card’s rules text. Some, though, are very common or would require too much space to define on the card. In these cases, the object lists only the name of the ability as a “keyword”; sometimes reminder text summarizes the game rule.
+ **702.1a** If an effect refers to a “[keyword ability] cost,” it refers only to the variable costs for that keyword.

      Example: Varolz, the Scar-Striped has an ability that says “Each creature card in your graveyard has scavenge. The scavenge cost is equal to its mana cost.” A creature card’s scavenge cost is an amount of mana equal to its mana cost, and the activation cost of the scavenge ability is that amount of mana plus “Exile this card from your graveyard.”
+ **702.1b** An effect that grants an object a keyword ability may define a variable in that ability based on characteristics of that object or other information about the game state. For these abilities, the value of that variable is constantly reevaluated.

      Example: Volcano Hellion has the ability “Volcano Hellion has echo {X}, where X is your life total.” If your life total is 10 when Volcano Hellion’s echo ability triggers but 5 when it resolves, the echo cost to pay is {5}.

      Example: Fire//Ice is a split card whose halves have the mana costs {1}{R} and {1}{U}. Past in Flames reads “Each instant and sorcery card in your graveyard gains flashback until end of turn. The flashback cost is equal to its mana cost.” Fire//Ice has “Flashback {2}{U}{R}” while it is in your graveyard, but if you choose to cast Fire, the resulting spell has “Flashback {1}{R}.”
+ **702.1c** An effect may state that “the same is true for” a list of keyword abilities or similar. If one of those keyword abilities has variants or variables and the effect grants that keyword or counters of that keyword to one or more objects and/or players, it grants each appropriate variant and variable of that keyword.

      Example: Concerted Effort is an enchantment that reads “At the beginning of each upkeep, creatures you control gain flying until end of turn if a creature you control has flying. The same is true for fear, first strike, double strike, landwalk, protection, trample, and vigilance.” As that triggered ability resolves, each landwalk and protection ability from among creatures you control is granted to each creature you control.
+ **702.1d** An effect may refer to an object “with [keyword ability]” or “that has [keyword ability].” This means the same thing as an object “with a [keyword ability] ability” or an object “that has a [keyword ability] ability.”

**702.2.** Deathtouch
+ **702.2a** Deathtouch is a static ability.
+ **702.2b** A creature with toughness greater than 0 that’s been dealt damage by a source with deathtouch since the last time state-based actions were checked is destroyed as a state-based action. See rule 704.
+ **702.2c** Any nonzero amount of combat damage assigned to a creature by a source with deathtouch is considered to be lethal damage for the purposes of determining if a proposed combat damage assignment is valid, regardless of that creature’s toughness. See rules 510.1c–d.
+ **702.2d** The deathtouch rules function no matter what zone an object with deathtouch deals damage from.
+ **702.2e** If an object changes zones before an effect causes it to deal damage, its last known information is used to determine whether it had deathtouch.
+ **702.2f** Multiple instances of deathtouch on the same object are redundant.

**702.3.** Defender
+ **702.3a** Defender is a static ability.
+ **702.3b** A creature with defender can’t attack.
+ **702.3c** Multiple instances of defender on the same creature are redundant.

**702.4.** Double Strike
+ **702.4a** Double strike is a static ability that modifies the rules for the combat damage step. (See rule 510, “Combat Damage Step.”)
+ **702.4b** If at least one attacking or blocking creature has first strike (see rule 702.7) or double strike as the combat damage step begins, the only creatures that assign combat damage in that step are those with first strike or double strike. After that step, instead of proceeding to the end of combat step, the phase gets a second combat damage step. The only creatures that assign combat damage in that step are the remaining attackers and blockers that had neither first strike nor double strike as the first combat damage step began, as well as the remaining attackers and blockers that currently have double strike. After that step, the phase proceeds to the end of combat step.
+ **702.4c** Removing double strike from a creature during the first combat damage step will stop it from assigning combat damage in the second combat damage step.
+ **702.4d** Giving double strike to a creature with first strike after it has already dealt combat damage in the first combat damage step will allow the creature to assign combat damage in the second combat damage step.
+ **702.4e** Multiple instances of double strike on the same creature are redundant.

**702.5.** Enchant
+ **702.5a** Enchant is a static ability, written “Enchant [object or player].” The enchant ability restricts what an Aura spell can target and what an Aura can enchant.
+ **702.5b** For more information about Auras, see rule 303, “Enchantments.”
+ **702.5c** If an Aura has multiple instances of enchant, all of them apply. The Aura’s target must follow the restrictions from all the instances of enchant. The Aura can enchant only objects or players that match all of its enchant abilities.
+ **702.5d** Auras that can enchant a player can target and be attached to players. Such Auras can’t target permanents and can’t be attached to permanents.

**702.6.** Equip
+ **702.6a** Equip is an activated ability of Equipment cards. “Equip [cost]” means “[Cost]: Attach this permanent to target creature you control. Activate only as a sorcery.”
+ **702.6b** For more information about Equipment, see rule 301, “Artifacts.”
+ **702.6c** Equip abilities may further restrict what creatures may be chosen as legal targets. Such restrictions usually appear in the form “Equip [quality]” or “Equip [quality] creature.” These equip abilities may legally target only a creature that’s controlled by the player activating the ability and that has the chosen quality. Additional restrictions for an equip ability don’t restrict what the Equipment may be attached to.
+ **702.6d** If a permanent has multiple equip abilities, any of its equip abilities may be activated.
+ **702.6e** “Equip planeswalker” is a variant of the equip ability. “Equip planeswalker [cost]” means “[Cost]: Attach this permanent to target planeswalker you control as though that planeswalker were a creature. Activate only as a sorcery.”

**702.7.** First Strike
+ **702.7a** First strike is a static ability that modifies the rules for the combat damage step. (See rule 510, “Combat Damage Step.”)
+ **702.7b** If at least one attacking or blocking creature has first strike or double strike (see rule 702.4) as the combat damage step begins, the only creatures that assign combat damage in that step are those with first strike or double strike. After that step, instead of proceeding to the end of combat step, the phase gets a second combat damage step. The only creatures that assign combat damage in that step are the remaining attackers and blockers that had neither first strike nor double strike as the first combat damage step began, as well as the remaining attackers and blockers that currently have double strike. After that step, the phase proceeds to the end of combat step.
+ **702.7c** Giving first strike to a creature without it after combat damage has already been dealt in the first combat damage step won’t preclude that creature from assigning combat damage in the second combat damage step. Removing first strike from a creature after it has already dealt combat damage in the first combat damage step won’t allow it to also assign combat damage in the second combat damage step (unless the creature has double strike).
+ **702.7d** Multiple instances of first strike on the same creature are redundant.

**702.8.** Flash
+ **702.8a** Flash is a static ability that functions in any zone from which you could play the card it’s on. “Flash” means “You may play this card any time you could cast an instant.”
+ **702.8b** Multiple instances of flash on the same object are redundant.

**702.9.** Flying
+ **702.9a** Flying is an evasion ability.
+ **702.9b** A creature with flying can’t be blocked except by creatures with flying and/or reach. A creature with flying can block a creature with or without flying. (See rule 509, “Declare Blockers Step,” and rule 702.17, “Reach.”)
+ **702.9c** Multiple instances of flying on the same creature are redundant.

**702.10.** Haste
+ **702.10**a Haste is a static ability.
+ **702.10**b If a creature has haste, it can attack even if it hasn’t been controlled by its controller continuously since their most recent turn began. (See rule 302.6.)
+ **702.10**c If a creature has haste, its controller can activate its activated abilities whose cost includes the tap symbol or the untap symbol even if that creature hasn’t been controlled by that player continuously since their most recent turn began. (See rule 302.6.)
+ **702.10**d Multiple instances of haste on the same creature are redundant.

**702.11.** Hexproof
+ **702.11**a Hexproof is a static ability.
+ **702.11**b “Hexproof” on a permanent means “This permanent can’t be the target of spells or abilities your opponents control.”
+ **702.11**c “Hexproof” on a player means “You can’t be the target of spells or abilities your opponents control.”
+ **702.11**d “Hexproof from [quality]” is a variant of the hexproof ability. “Hexproof from [quality]” on a permanent means “This permanent can’t be the target of [quality] spells your opponents control or abilities your opponents control from [quality] sources.” A “hexproof from [quality]” ability is a hexproof ability.
+ **702.11**e Any effect that causes an object to lose hexproof will cause an object to lose all “hexproof from [quality]” abilities. Any effect that allows a player to choose a creature with hexproof as a target as though it didn’t have hexproof will allow a player to choose a creature with a “hexproof from [quality]” ability. Any effect that looks for a card with hexproof will find a card with a “hexproof from [quality]” ability.
+ **702.11**f “Hexproof from [quality A] and from [quality B]” is shorthand for “hexproof from [quality A]” and “hexproof from [quality B]”; it behaves as two separate hexproof abilities. If an effect causes an object with such an ability to lose hexproof from [quality A], for example, that object would still have hexproof from [quality B].
+ **702.11**g Multiple instances of the same hexproof ability on the same permanent or player are redundant.

**702.12.** Indestructible
+ **702.12**a Indestructible is a static ability.
+ **702.12**b A permanent with indestructible can’t be destroyed. Such permanents aren’t destroyed by lethal damage, and they ignore the state-based action that checks for lethal damage (see rule 704.5g).
+ **702.12**c Multiple instances of indestructible on the same permanent are redundant.

**702.13.** Intimidate
+ **702.13**a Intimidate is an evasion ability.
+ **702.13**b A creature with intimidate can’t be blocked except by artifact creatures and/or creatures that share a color with it. (See rule 509, “Declare Blockers Step.”)
+ **702.13**c Multiple instances of intimidate on the same creature are redundant.

**702.14.** Landwalk
+ **702.14**a Landwalk is a generic term that appears within an object’s rules text as “[type]walk,” where [type] is usually a land type, but it can also be the card type land plus any combination of land types, card types, and/or supertypes.
+ **702.14**b Landwalk is an evasion ability.
+ **702.14**c A creature with landwalk can’t be blocked as long as the defending player controls at least one land with the specified land type (as in “islandwalk”), with the specified type or supertype (as in “artifact landwalk”), without the specified type or supertype (as in “nonbasic landwalk”), or with both the specified type or supertype and the specified subtype (as in “snow swampwalk”). (See rule 509, “Declare Blockers Step.”)
+ **702.14**d Landwalk abilities don’t “cancel” one another.

      Example: If a player controls a snow Forest, that player can’t block an attacking creature with snow forestwalk even if they also control a creature with snow forestwalk.
+ **702.14**e Multiple instances of the same kind of landwalk on the same creature are redundant.

**702.15.** Lifelink
+ **702.15**a Lifelink is a static ability.
+ **702.15**b Damage dealt by a source with lifelink causes that source’s controller, or its owner if it has no controller, to gain that much life (in addition to any other results that damage causes). See rule 120.3.
+ **702.15**c If an object changes zones before an effect causes it to deal damage, its last known information is used to determine whether it had lifelink.
+ **702.15**d The lifelink rules function no matter what zone an object with lifelink deals damage from.
+ **702.15**e If multiple sources with lifelink deal damage at the same time, they cause separate life gain events (see rules 119.9–10).

      Example: A player controls Ajani’s Pridemate, which reads “Whenever you gain life, put a +1/+1 counter on Ajani’s Pridemate,” and two creatures with lifelink. The creatures with lifelink deal combat damage simultaneously. Ajani’s Pridemate’s ability triggers twice.
+ **702.15**f Multiple instances of lifelink on the same object are redundant.

**702.16.** Protection
+ **702.16**a Protection is a static ability, written “Protection from [quality].” This quality is usually a color (as in “protection from black”) but can be any characteristic value or information. If the quality happens to be a card name, it is treated as such only if the protection ability specifies that the quality is a name. If the quality is a card type, subtype, or supertype, the ability applies to sources that are permanents with that card type, subtype, or supertype and to any sources not on the battlefield that are of that card type, subtype, or supertype. This is an exception to rule 109.2.
+ **702.16**b A permanent or player with protection can’t be targeted by spells with the stated quality and can’t be targeted by abilities from a source with the stated quality.
+ **702.16**c A permanent or player with protection can’t be enchanted by Auras that have the stated quality. Such Auras attached to the permanent or player with protection will be put into their owners’ graveyards as a state-based action. (See rule 704, “State-Based Actions.”)
+ **702.16**d A permanent with protection can’t be equipped by Equipment that have the stated quality or fortified by Fortifications that have the stated quality. Such Equipment or Fortifications become unattached from that permanent as a state-based action, but remain on the battlefield. (See rule 704, “State-Based Actions.”)
+ **702.16**e Any damage that would be dealt by sources that have the stated quality to a permanent or player with protection is prevented.
+ **702.16**f Attacking creatures with protection can’t be blocked by creatures that have the stated quality.
+ **702.16**g “Protection from [quality A] and from [quality B]” is shorthand for “protection from [quality A]” and “protection from [quality B]”; it behaves as two separate protection abilities. If an effect causes an object with such an ability to lose protection from [quality A], for example, that object would still have protection from [quality B].
+ **702.16**h “Protection from all [characteristic]” is shorthand for “protection from [quality A],” “protection from [quality B],” and so on for each possible quality the listed characteristic could have; it behaves as multiple separate protection abilities. If an effect causes an object with such an ability to lose protection from [quality A], for example, that object would still have protection from [quality B], [quality C], and so on.
+ **702.16**i “Protection from each [set of characteristics, qualities, or players]” is shorthand for “protection from [A],” “protection from [B],” and so on for each characteristic, quality, or player in the set. It behaves as multiple separate protection abilities.
+ **702.16**j “Protection from everything” is a variant of the protection ability. A permanent or player with protection from everything has protection from each object regardless of that object’s characteristic values. Such a permanent or player can’t be targeted by spells or abilities and can’t be enchanted by Auras. Such a permanent can’t be equipped by Equipment, fortified by Fortifications, or blocked by creatures. All damage that would be dealt to such a permanent or player is prevented.
+ **702.16**k “Protection from [a player]” is a variant of the protection ability. A permanent with protection from a specific player has protection from each object the player controls and protection from each object the player owns not controlled by another player, regardless of that object’s characteristic values. Such a permanent can’t be targeted by spells or abilities the player controls, enchanted by Auras the player controls, equipped by Equipment the player controls, fortified by Fortifications the player controls, or blocked by creatures the player controls, and all damage that would be dealt to it by sources controlled by the player or owned by the player but not controlled by another player is prevented.
+ **702.16**m Multiple instances of protection from the same quality on the same permanent or player are redundant.
+ **702.16**n Some Auras both give the enchanted creature protection from a quality and say “this effect doesn’t remove” either that specific Aura or all Auras. This means that the specified Auras aren’t put into their owners’ graveyards as a state-based action. If the creature has other instances of protection from the same quality, those instances affect Auras as normal.
+ **702.16**p One Aura (Benevolent Blessing) gives the enchanted creature protection from a quality and says the effect doesn’t remove certain permanents that are “already attached to” that creature. This means that, when the protection effect starts to apply, any objects with the stated quality that are already attached to that creature (including the Aura giving that creature protection) will not be put into their owners’ graveyards as a state-based action. Other permanents with the stated quality can’t become attached to the creature. If the creature has other instances of protection from the same quality, those instances affect attached permanents as normal.

**702.17.** Reach
+ **702.17**a Reach is a static ability.
+ **702.17**b A creature with flying can’t be blocked except by creatures with flying and/or reach. (See rule 509, “Declare Blockers Step,” and rule 702.9, “Flying.”)
+ **702.17**c Multiple instances of reach on the same creature are redundant.

**702.18.** Shroud
+ **702.18**a Shroud is a static ability. “Shroud” means “This permanent or player can’t be the target of spells or abilities.”
+ **702.18**b Multiple instances of shroud on the same permanent or player are redundant.

**702.19.** Trample
+ **702.19**a Trample is a static ability that modifies the rules for assigning an attacking creature’s combat damage. The ability has no effect when a creature with trample is blocking or is dealing noncombat damage. (See rule 510, “Combat Damage Step.”)
+ **702.19**b The controller of an attacking creature with trample first assigns damage to the creature(s) blocking it. Once all those blocking creatures are assigned lethal damage, any excess damage is assigned as its controller chooses among those blocking creatures and the player or planeswalker the creature is attacking. When checking for assigned lethal damage, take into account damage already marked on the creature and damage from other creatures that’s being assigned during the same combat damage step, but not any abilities or effects that might change the amount of damage that’s actually dealt. The attacking creature’s controller need not assign lethal damage to all those blocking creatures but in that case can’t assign any damage to the player or planeswalker it’s attacking.

      Example: A 2/2 creature that can block an additional creature blocks two attackers: a 1/1 with no abilities and a 3/3 with trample. The active player could assign 1 damage from the first attacker and 1 damage from the second to the blocking creature, and 2 damage to the defending player from the creature with trample.

      Example: A 6/6 green creature with trample is blocked by a 2/2 creature with protection from green. The attacking creature’s controller must assign at least 2 damage to the blocker, even though that damage will be prevented by the blocker’s protection ability. The attacking creature’s controller can divide the rest of the damage as they choose between the blocking creature and the defending player.
+ **702.19**c Trample over planeswalkers is a variant of trample that modifies the rules for assigning combat damage to planeswalkers. The controller of a creature with trample over planeswalkers assigns that creature’s combat damage as described in rule 702.19b, with one exception. If that creature is attacking a planeswalker, after lethal damage is assigned to all blocking creatures and damage at least equal to the loyalty of the planeswalker the creature is attacking is assigned to that planeswalker, further excess damage may be assigned as the attacking creature’s controller chooses among those blocking creatures, that planeswalker, and that planeswalker’s controller. When checking for assigned damage equal to a planeswalker’s loyalty, take into account damage from other creatures that’s being assigned during the same combat damage step, but not any abilities or effects that might change the amount of damage that’s actually dealt.

      Example: A player controls a planeswalker with three loyalty counters that is being attacked by a 1/1 with no abilities and a 7/7 with trample over planeswalkers. The active player could assign 1 damage from the first attacker and 2 damage from the second to the planeswalker and 5 damage to the defending player from the creature with trample over planeswalkers.
+ **702.19**d If an attacking creature with trample or trample over planeswalkers is blocked, but there are no creatures blocking it when damage is assigned, its damage is assigned to the defending player and/or planeswalker as though all blocking creatures have been assigned lethal damage.
+ **702.19**e If a creature with trample over planeswalkers is attacking a planeswalker and that planeswalker is removed from combat, the creature’s damage may be assigned to the defending player once all blocking creatures have been dealt lethal damage or, if there are no blocking creatures when damage is assigned, all its damage is assigned to the defending player. This does not cause the creature to be attacking that player.
+ **702.19**f If a creature without trample over planeswalkers is attacking a planeswalker, none of its combat damage can be assigned to the defending player, even if that planeswalker has been removed from combat or the damage the attacking creature could assign is greater than the planeswalker’s loyalty.
+ **702.19**g Multiple instances of trample on the same creature are redundant. Multiple instances of trample over planeswalkers on the same creature are redundant.

**702.20.** Vigilance
+ **702.20**a Vigilance is a static ability that modifies the rules for the declare attackers step.
+ **702.20**b Attacking doesn’t cause creatures with vigilance to tap. (See rule 508, “Declare Attackers Step.”)
+ **702.20**c Multiple instances of vigilance on the same creature are redundant.

**702.21.** Ward
+ **702.21**a Ward is a triggered ability. Ward [cost] means “Whenever this permanent becomes the target of a spell or ability an opponent controls, counter that spell or ability unless that player pays [cost].”
+ **702.21**b Some ward abilities include an X in their cost and state what X is equal to. This value is determined at the time the ability resolves, not locked in as the ability triggers.

**702.22.** Banding
+ **702.22**a Banding is a static ability that modifies the rules for combat.
+ **702.22**b “Bands with other” is a special form of banding. If an effect causes a permanent to lose banding, the permanent loses all “bands with other” abilities as well.
+ **702.22**c As a player declares attackers, they may declare that one or more attacking creatures with banding and up to one attacking creature without banding (even if it has “bands with other”) are all in a “band.” They may also declare that one or more attacking [quality] creatures with “bands with other [quality]” and any number of other attacking [quality] creatures are all in a band. A player may declare as many attacking bands as they want, but each creature may be a member of only one of them. (Defending players can’t declare bands but may use banding in a different way; see rule 702.22j.)
+ **702.22**d All creatures in an attacking band must attack the same player or planeswalker.
+ **702.22**e Once an attacking band has been announced, it lasts for the rest of combat, even if something later removes banding or “bands with other” from one or more of the creatures in the band.
+ **702.22**f An attacking creature that’s removed from combat is also removed from the band it was in.
+ **702.22**g Banding doesn’t cause attacking creatures to share abilities, nor does it remove any abilities. The attacking creatures in a band are separate permanents.
+ **702.22**h If an attacking creature becomes blocked by a creature, each other creature in the same band as the attacking creature becomes blocked by that same blocking creature.

      Example: A player attacks with a band consisting of a creature with flying and a creature with swampwalk. The defending player, who controls a Swamp, can block the flying creature if able. If they do, then the creature with swampwalk will also become blocked by the blocking creature(s).
+ **702.22**i If one member of a band would become blocked due to an effect, the entire band becomes blocked.
+ **702.22**j During the combat damage step, if an attacking creature is being blocked by a creature with banding, or by both a [quality] creature with “bands with other [quality]” and another [quality] creature, the defending player (rather than the active player) chooses how the attacking creature’s damage is assigned. That player can divide that creature’s combat damage as they choose among any creatures blocking it. This is an exception to the procedure described in rule 510.1c.
+ **702.22**k During the combat damage step, if a blocking creature is blocking a creature with banding, or both a [quality] creature with “bands with other [quality]” and another [quality] creature, the active player (rather than the defending player) chooses how the blocking creature’s damage is assigned. That player can divide that creature’s combat damage as they choose among any creatures it’s blocking. This is an exception to the procedure described in rule 510.1d.
+ **702.22**m Multiple instances of banding on the same creature are redundant. Multiple instances of “bands with other” of the same kind on the same creature are redundant.

**702.23.** Rampage
+ **702.23**a Rampage is a triggered ability. “Rampage N” means “Whenever this creature becomes blocked, it gets +N/+N until end of turn for each creature blocking it beyond the first.” (See rule 509, “Declare Blockers Step.”)
+ **702.23**b The rampage bonus is calculated only once per combat, when the triggered ability resolves. Adding or removing blockers later in combat won’t change the bonus.
+ **702.23**c If a creature has multiple instances of rampage, each triggers separately.

**702.24.** Cumulative Upkeep
+ **702.24**a Cumulative upkeep is a triggered ability that imposes an increasing cost on a permanent. “Cumulative upkeep [cost]” means “At the beginning of your upkeep, if this permanent is on the battlefield, put an age counter on this permanent. Then you may pay [cost] for each age counter on it. If you don’t, sacrifice it.” If [cost] has choices associated with it, each choice is made separately for each age counter, then either the entire set of costs is paid, or none of them is paid. Partial payments aren’t allowed.

      Example: A creature has “Cumulative upkeep {W} or {U}” and two age counters on it. When its ability next triggers and resolves, the creature’s controller puts an age counter on it and then may pay {W}{W}{W}, {W}{W}{U}, {W}{U}{U}, or {U}{U}{U} to keep the creature on the battlefield.

      Example: A creature has “Cumulative upkeep—Sacrifice a creature” and one age counter on it. When its ability next triggers and resolves, its controller can’t choose the same creature to sacrifice twice. Either two different creatures must be sacrificed, or the creature with cumulative upkeep must be sacrificed.
+ **702.24**b If a permanent has multiple instances of cumulative upkeep, each triggers separately. However, the age counters are not connected to any particular ability; each cumulative upkeep ability will count the total number of age counters on the permanent at the time that ability resolves.

      Example: A creature has two instances of “Cumulative upkeep—Pay 1 life.” The creature has no age counters, and both cumulative upkeep abilities trigger. When the first ability resolves, the controller adds a counter and then chooses to pay 1 life. When the second ability resolves, the controller adds another counter and then chooses to pay an additional 2 life.

**702.25.** Flanking
+ **702.25**a Flanking is a triggered ability that triggers during the declare blockers step. (See rule 509, “Declare Blockers Step.”) “Flanking” means “Whenever this creature becomes blocked by a creature without flanking, the blocking creature gets -1/-1 until end of turn.”
+ **702.25**b If a creature has multiple instances of flanking, each triggers separately.

**702.26.** Phasing
+ **702.26**a Phasing is a static ability that modifies the rules of the untap step. During each player’s untap step, before the active player untaps permanents, all phased-in permanents with phasing that player controls “phase out.” Simultaneously, all phased-out permanents that had phased out under that player’s control “phase in.”
+ **702.26**b If a permanent phases out, its status changes to “phased out.” Except for rules and effects that specifically mention phased-out permanents, a phased-out permanent is treated as though it does not exist. It can’t affect or be affected by anything else in the game. A permanent that phases out is removed from combat. (See rule 506.4.)

      Example: You control three creatures, one of which is phased out. You cast a spell that says “Draw a card for each creature you control.” You draw two cards.

      Example: You control a phased-out creature. You cast a spell that says “Destroy all creatures.” The phased-out creature is not destroyed.
+ **702.26**c If a permanent phases in, its status changes to “phased in.” The game once again treats it as though it exists.
+ **702.26**d The phasing event doesn’t actually cause a permanent to change zones or control, even though it’s treated as though it’s not on the battlefield and not under its controller’s control while it’s phased out. Zone-change triggers don’t trigger when a permanent phases in or out. Tokens continue to exist on the battlefield while phased out. Counters remain on a permanent while it’s phased out. Effects that check a phased-in permanent’s history won’t treat the phasing event as having caused the permanent to leave or enter the battlefield or its controller’s control.
+ **702.26**e If a continuous effect generated by the resolution of a spell or ability modifies the characteristics or changes the controller of any objects, a phased-out permanent won’t be included in the set of affected objects. This includes continuous effects that reference the permanent specifically, unless they also specifically refer to the permanent as phased out.
+ **702.26**f Continuous effects that affect a phased-out permanent may expire while that permanent is phased out. If so, they will no longer affect that permanent once it’s phased in. In particular, effects with “for as long as” durations that track that permanent (see rule 611.2b) end when that permanent phases out because they can no longer see it.
+ **702.26**g When a permanent phases out, any Auras, Equipment, or Fortifications attached to that permanent phase out at the same time. This alternate way of phasing out is known as phasing out “indirectly.” An Aura, Equipment, or Fortification that phased out indirectly won’t phase in by itself, but instead phases in along with the permanent it’s attached to.
+ **702.26**h If an object would simultaneously phase out directly and indirectly, it just phases out indirectly.
+ **702.26**i An Aura, Equipment, or Fortification that phased out directly will phase in attached to the object or player it was attached to when it phased out, if that object is still in the same zone or that player is still in the game. If not, that Aura, Equipment, or Fortification phases in unattached. State-based actions apply as appropriate. (See rules 704.5m and 704.5n.)
+ **702.26**j Abilities that trigger when a permanent becomes attached or unattached from an object or player don’t trigger when that permanent phases in or out.
+ **702.26**k Phased-out permanents owned by a player who leaves the game also leave the game. This doesn’t trigger zone-change triggers. See rule 800.4.
+ **702.26**m If an effect causes a player to skip their untap step, the phasing event simply doesn’t occur that turn.
+ **702.26**n In a multiplayer game, game rules may cause a phased-out permanent to leave the game or to be exiled once a player leaves the game. (See rules 800.4a and 800.4c.) If a phased-out permanent phased out under the control of a player who has left the game, that permanent phases in during the next untap step after that player’s next turn would have begun.
+ **702.26**p Multiple instances of phasing on the same permanent are redundant.

**702.27.** Buyback
+ **702.27**a Buyback appears on some instants and sorceries. It represents two static abilities that function while the spell is on the stack. “Buyback [cost]” means “You may pay an additional [cost] as you cast this spell” and “If the buyback cost was paid, put this spell into its owner’s hand instead of into that player’s graveyard as it resolves.” Paying a spell’s buyback cost follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

**702.28.** Shadow
+ **702.28**a Shadow is an evasion ability.
+ **702.28**b A creature with shadow can’t be blocked by creatures without shadow, and a creature without shadow can’t be blocked by creatures with shadow. (See rule 509, “Declare Blockers Step.”)
+ **702.28**c Multiple instances of shadow on the same creature are redundant.

**702.29.** Cycling
+ **702.29**a Cycling is an activated ability that functions only while the card with cycling is in a player’s hand. “Cycling [cost]” means “[Cost], Discard this card: Draw a card.”
+ **702.29**b Although the cycling ability can be activated only if the card is in a player’s hand, it continues to exist while the object is on the battlefield and in all other zones. Therefore objects with cycling will be affected by effects that depend on objects having one or more activated abilities.
+ **702.29**c Some cards with cycling have abilities that trigger when they’re cycled. “When you cycle [this card]” means “When you discard [this card] to pay an activation cost of a cycling ability.” These abilities trigger from whatever zone the card winds up in after it’s cycled.
+ **702.29**d Some cards have abilities that trigger whenever a player “cycles or discards” a card. These abilities trigger only once when a card is cycled.
+ **702.29**e Typecycling is a variant of the cycling ability. “[Type]cycling [cost]” means “[Cost], Discard this card: Search your library for a [type] card, reveal it, and put it into your hand. Then shuffle your library.” This type is usually a subtype (as in “mountaincycling”) but can be any card type, subtype, supertype, or combination thereof (as in “basic landcycling”).
+ **702.29**f Typecycling abilities are cycling abilities, and typecycling costs are cycling costs. Any cards that trigger when a player cycles a card will trigger when a card is discarded to pay an activation cost of a typecycling ability. Any effect that stops players from cycling cards will stop players from activating cards’ typecycling abilities. Any effect that increases or reduces a cycling cost will increase or reduce a typecycling cost. Any effect that looks for a card with cycling will find a card with typecycling.

**702.30.** Echo
+ **702.30**a Echo is a triggered ability. “Echo [cost]” means “At the beginning of your upkeep, if this permanent came under your control since the beginning of your last upkeep, sacrifice it unless you pay [cost].”
+ **702.30**b Urza block cards with the echo ability were printed without an echo cost. These cards have been given errata in the Oracle card reference; each one now has an echo cost equal to its mana cost.

**702.31.** Horsemanship
+ **702.31**a Horsemanship is an evasion ability.
+ **702.31**b A creature with horsemanship can’t be blocked by creatures without horsemanship. A creature with horsemanship can block a creature with or without horsemanship. (See rule 509, “Declare Blockers Step.”)
+ **702.31**c Multiple instances of horsemanship on the same creature are redundant.

**702.32.** Fading
+ **702.32**a Fading is a keyword that represents two abilities. “Fading N” means “This permanent enters the battlefield with N fade counters on it” and “At the beginning of your upkeep, remove a fade counter from this permanent. If you can’t, sacrifice the permanent.”

**702.33.** Kicker
+ **702.33**a Kicker is a static ability that functions while the spell with kicker is on the stack. “Kicker [cost]” means “You may pay an additional [cost] as you cast this spell.” Paying a spell’s kicker cost(s) follows the rules for paying additional costs in rules 601.2b and 601.2f–h.
+ **702.33**b The phrase “Kicker [cost 1] and/or [cost 2]” means the same thing as “Kicker [cost 1], kicker [cost 2].”
+ **702.33**c Multikicker is a variant of the kicker ability. “Multikicker [cost]” means “You may pay an additional [cost] any number of times as you cast this spell.” A multikicker cost is a kicker cost.
+ **702.33**d If a spell’s controller declares the intention to pay any of that spell’s kicker costs, that spell has been “kicked.” If a spell has two kicker costs or has multikicker, it may be kicked multiple times. See rule 601.2b.
+ **702.33**e Objects with kicker or multikicker have additional abilities that specify what happens if they are kicked. These abilities are linked to the kicker or multikicker abilities printed on that object: they can refer only to those specific kicker or multikicker abilities. See rule 607, “Linked Abilities.”
+ **702.33**f Objects with more than one kicker cost have abilities that each correspond to a specific kicker cost. They contain the phrases “if it was kicked with its [A] kicker” and “if it was kicked with its [B] kicker,” where A and B are the first and second kicker costs listed on the card, respectively. Each of those abilities is linked to the appropriate kicker ability.
+ **702.33**g If part of a spell’s ability has its effect only if that spell was kicked, and that part of the ability includes any targets, the spell’s controller chooses those targets only if that spell was kicked. Otherwise, the spell is cast as if it did not have those targets. See rule 601.2c.

**702.34.** Flashback
+ **702.34**a Flashback appears on some instants and sorceries. It represents two static abilities: one that functions while the card is in a player’s graveyard and another that functions while the card is on the stack. “Flashback [cost]” means “You may cast this card from your graveyard if the resulting spell is an instant or sorcery spell by paying [cost] rather than paying its mana cost” and “If the flashback cost was paid, exile this card instead of putting it anywhere else any time it would leave the stack.” Casting a spell using its flashback ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

**702.35.** Madness
+ **702.35**a Madness is a keyword that represents two abilities. The first is a static ability that functions while the card with madness is in a player’s hand. The second is a triggered ability that functions when the first ability is applied. “Madness [cost]” means “If a player would discard this card, that player discards it, but exiles it instead of putting it into their graveyard” and “When this card is exiled this way, its owner may cast it by paying [cost] rather than paying its mana cost. If that player doesn’t, they put this card into their graveyard.”
+ **702.35**b Casting a spell using its madness ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.
+ **702.35**c After resolving a madness triggered ability, if the exiled card wasn’t cast and was moved to a public zone, effects referencing the discarded card can find that card. See rule 400.7i.

**702.36.** Fear
+ **702.36**a Fear is an evasion ability.
+ **702.36**b A creature with fear can’t be blocked except by artifact creatures and/or black creatures. (See rule 509, “Declare Blockers Step.”)
+ **702.36**c Multiple instances of fear on the same creature are redundant.

**702.37.** Morph
+ **702.37**a Morph is a static ability that functions in any zone from which you could play the card it’s on, and the morph effect works any time the card is face down. “Morph [cost]” means “You may cast this card as a 2/2 face-down creature with no text, no name, no subtypes, and no mana cost by paying {3} rather than paying its mana cost.” (See rule 708, “Face-Down Spells and Permanents.”)
+ **702.37**b Megamorph is a variant of the morph ability. “Megamorph [cost]” means “You may cast this card as a 2/2 face-down creature with no text, no name, no subtypes, and no mana cost by paying {3} rather than paying its mana cost” and “As this permanent is turned face up, put a +1/+1 counter on it if its megamorph cost was paid to turn it face up.” A megamorph cost is a morph cost.
+ **702.37**c To cast a card using its morph ability, turn it face down. It becomes a 2/2 face-down creature card with no text, no name, no subtypes, and no mana cost. Any effects or prohibitions that would apply to casting a card with these characteristics (and not the face-up card’s characteristics) are applied to casting this card. These values are the copiable values of that object’s characteristics. (See rule 613, “Interaction of Continuous Effects,” and rule 707, “Copying Objects.”) Put it onto the stack (as a face-down spell with the same characteristics), and pay {3} rather than pay its mana cost. This follows the rules for paying alternative costs. You can use a morph ability to cast a card from any zone from which you could normally play it. When the spell resolves, it enters the battlefield with the same characteristics the spell had. The morph effect applies to the face-down object wherever it is, and it ends when the permanent is turned face up.
+ **702.37**d You can’t normally cast a card face down. A morph ability allows you to do so.
+ **702.37**e Any time you have priority, you may turn a face-down permanent you control with a morph ability face up. This is a special action; it doesn’t use the stack (see rule 116). To do this, show all players what the permanent’s morph cost would be if it were face up, pay that cost, then turn the permanent face up. (If the permanent wouldn’t have a morph cost if it were face up, it can’t be turned face up this way.) The morph effect on it ends, and it regains its normal characteristics. Any abilities relating to the permanent entering the battlefield don’t trigger when it’s turned face up and don’t have any effect, because the permanent has already entered the battlefield.
+ **702.37**f If a permanent’s morph cost includes X, other abilities of that permanent may also refer to X. The value of X in those abilities is equal to the value of X chosen as the morph special action was taken.
+ **702.37**g See rule 708, “Face-Down Spells and Permanents,” for more information about how to cast cards with a morph ability.

**702.38.** Amplify
+ **702.38**a Amplify is a static ability. “Amplify N” means “As this object enters the battlefield, reveal any number of cards from your hand that share a creature type with it. This permanent enters the battlefield with N +1/+1 counters on it for each card revealed this way. You can’t reveal this card or any other cards that are entering the battlefield at the same time as this card.”
+ **702.38**b If a creature has multiple instances of amplify, each one works separately.

**702.39.** Provoke
+ **702.39**a Provoke is a triggered ability. “Provoke” means “Whenever this creature attacks, you may choose to have target creature defending player controls block this creature this combat if able. If you do, untap that creature.”
+ **702.39**b If a creature has multiple instances of provoke, each triggers separately.

**702.40.** Storm
+ **702.40**a Storm is a triggered ability that functions on the stack. “Storm” means “When you cast this spell, copy it for each other spell that was cast before it this turn. If the spell has any targets, you may choose new targets for any of the copies.”
+ **702.40**b If a spell has multiple instances of storm, each triggers separately.

**702.41.** Affinity
+ **702.41**a Affinity is a static ability that functions while the spell with affinity is on the stack. “Affinity for [text]” means “This spell costs you {1} less to cast for each [text] you control.”
+ **702.41**b If a spell has multiple instances of affinity, each of them applies.

**702.42.** Entwine
+ **702.42**a Entwine is a static ability of modal spells (see rule 700.2) that functions while the spell is on the stack. “Entwine [cost]” means “You may choose all modes of this spell instead of just the number specified. If you do, you pay an additional [cost].” Using the entwine ability follows the rules for choosing modes and paying additional costs in rules 601.2b and 601.2f–h.
+ **702.42**b If the entwine cost was paid, follow the text of each of the modes in the order written on the card when the spell resolves.

**702.43.** Modular
+ **702.43**a Modular represents both a static ability and a triggered ability. “Modular N” means “This permanent enters the battlefield with N +1/+1 counters on it” and “When this permanent is put into a graveyard from the battlefield, you may put a +1/+1 counter on target artifact creature for each +1/+1 counter on this permanent.”
+ **702.43**b If a creature has multiple instances of modular, each one works separately.

**702.44.** Sunburst
+ **702.44**a Sunburst is a static ability that functions as an object is entering the battlefield. “Sunburst” means “If this object is entering the battlefield as a creature, ignoring any type-changing effects that would affect it, it enters the battlefield with a +1/+1 counter on it for each color of mana spent to cast it. Otherwise, it enters the battlefield with a charge counter on it for each color of mana spent to cast it.”
+ **702.44**b Sunburst adds counters only if the object with sunburst is entering the battlefield from the stack as a resolving spell and only if one or more colored mana was spent on its costs, including additional or alternative costs.
+ **702.44**c Sunburst can also be used to set a variable number for another ability. If the keyword is used in this way, it doesn’t matter whether the ability is on a creature spell or on a noncreature spell.

      Example: The ability “Modular—Sunburst” means “This permanent enters the battlefield with a +1/+1 counter on it for each color of mana spent to cast it” and “When this permanent is put into a graveyard from the battlefield, you may put a +1/+1 counter on target artifact creature for each +1/+1 counter on this permanent.”
+ **702.44**d If an object has multiple instances of sunburst, each one works separately.

**702.45.** Bushido
+ **702.45**a Bushido is a triggered ability. “Bushido N” means “Whenever this creature blocks or becomes blocked, it gets +N/+N until end of turn.” (See rule 509, “Declare Blockers Step.”)
+ **702.45**b If a creature has multiple instances of bushido, each triggers separately.

**702.46.** Soulshift
+ **702.46**a Soulshift is a triggered ability. “Soulshift N” means “When this permanent is put into a graveyard from the battlefield, you may return target Spirit card with mana value N or less from your graveyard to your hand.”
+ **702.46**b If a permanent has multiple instances of soulshift, each triggers separately.

**702.47.** Splice
+ **702.47**a Splice is a static ability that functions while a card is in your hand. “Splice onto [quality] [cost]” means “You may reveal this card from your hand as you cast a [quality] spell. If you do, that spell gains the text of this card’s rules text and you pay [cost] as an additional cost to cast that spell.” Paying a card’s splice cost follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

      Example: Since the card with splice remains in the player’s hand, it can later be cast normally or spliced onto another spell. It can even be discarded to pay a “discard a card” cost of the spell it’s spliced onto.
+ **702.47**b You can’t choose to use a splice ability if you can’t make the required choices (targets, etc.) for that card’s rules text. You can’t splice any one card onto the same spell more than once. If you’re splicing more than one card onto a spell, reveal them all at once and choose the order in which their effects will happen. The effects of the main spell must happen first.
+ **702.47**c The spell has the characteristics of the main spell, plus the rules text of each of the spliced cards. This is a text-changing effect (see rule 612, “Text-Changing Effects”). The spell doesn’t gain any other characteristics (name, mana cost, color, supertypes, card types, subtypes, etc.) of the spliced cards. Text gained by the spell that refers to a card by name refers to the spell on the stack, not the card from which the text was copied.

      Example: Glacial Ray is a red card with splice onto Arcane that reads, “Glacial Ray deals 2 damage to any target.” Suppose Glacial Ray is spliced onto Reach Through Mists, a blue spell. The spell is still blue, and Reach Through Mists deals the damage. This means that the ability can target a creature with protection from red and deal 2 damage to that creature.
+ **702.47**d Choose targets for the added text normally (see rule 601.2c). Note that a spell with one or more targets won’t resolve if all of its targets are illegal on resolution.
+ **702.47**e The spell loses any splice changes once it leaves the stack for any reason.

**702.48.** Offering
+ **702.48**a Offering is a static ability that functions while the spell with offering is on the stack. “[Subtype] offering” means “As an additional cost to cast this spell, you may sacrifice a [subtype] permanent. If you chose to pay the additional cost, this spell’s total cost is reduced by the sacrificed permanent’s mana cost, and you may cast this spell any time you could cast an instant.”
+ **702.48**b You choose which permanent to sacrifice as you make choices for the spell (see rule 601.2b), and you sacrifice that permanent as you pay the total cost (see rule 601.2h).
+ **702.48**c Generic mana in the sacrificed permanent’s mana cost reduces generic mana in the spell’s total cost. Colored and colorless mana in the sacrificed permanent’s mana cost reduces mana of the same type in spell’s total cost, and any excess reduces that much generic mana in spell’s total cost. (See rule 118.7.)

**702.49.** Ninjutsu
+ **702.49**a Ninjutsu is an activated ability that functions only while the card with ninjutsu is in a player’s hand. “Ninjutsu [cost]” means “[Cost], Reveal this card from your hand, Return an unblocked attacking creature you control to its owner’s hand: Put this card onto the battlefield from your hand tapped and attacking.”
+ **702.49**b The card with ninjutsu remains revealed from the time the ability is announced until the ability leaves the stack.
+ **702.49**c A ninjutsu ability may be activated only while a creature on the battlefield is unblocked (see rule 509.1h). The creature with ninjutsu is put onto the battlefield unblocked. It will be attacking the same player or planeswalker as the creature that was returned to its owner’s hand.
+ **702.49**d Commander ninjutsu is a variant of the ninjutsu ability that also functions while the card with commander ninjutsu is in the command zone. “Commander ninjutsu [cost]” means “[Cost], Reveal this card from your hand or from the command zone, Return an unblocked attacking creature you control to its owner’s hand: Put this card onto the battlefield tapped and attacking.”

**702.50.** Epic
+ **702.50**a Epic represents two spell abilities, one of which creates a delayed triggered ability. “Epic” means “For the rest of the game, you can’t cast spells,” and “At the beginning of each of your upkeeps for the rest of the game, copy this spell except for its epic ability. If the spell has any targets, you may choose new targets for the copy.” See rule 707.10.
+ **702.50**b A player can’t cast spells once a spell with epic they control resolves, but effects (such as the epic ability itself) can still put copies of spells onto the stack.

**702.51.** Convoke
+ **702.51**a Convoke is a static ability that functions while the spell with convoke is on the stack. “Convoke” means “For each colored mana in this spell’s total cost, you may tap an untapped creature of that color you control rather than pay that mana. For each generic mana in this spell’s total cost, you may tap an untapped creature you control rather than pay that mana.”
+ **702.51**b The convoke ability isn’t an additional or alternative cost and applies only after the total cost of the spell with convoke is determined.

      Example: Heartless Summoning says, in part, “Creature spells you cast cost {2} less to cast.” You control Heartless Summoning and cast Siege Wurm, a spell with convoke that costs {5}{G}{G}. The total cost to cast Siege Wurm is {3}{G}{G}. After activating mana abilities, you pay that total cost. You may tap up to two green creatures and up to three other creatures to pay that cost, and the remainder is paid with mana.
+ **702.51**c A creature tapped to pay for mana in a spell’s total cost this way is said to have “convoked” that spell.
+ **702.51**d Multiple instances of convoke on the same spell are redundant.

**702.52.** Dredge
+ **702.52**a Dredge is a static ability that functions only while the card with dredge is in a player’s graveyard. “Dredge N” means “As long as you have at least N cards in your library, if you would draw a card, you may instead mill N cards and return this card from your graveyard to your hand.”
+ **702.52**b A player with fewer cards in their library than the number required by a dredge ability can’t mill any of them this way.

**702.53.** Transmute
+ **702.53**a Transmute is an activated ability that functions only while the card with transmute is in a player’s hand. “Transmute [cost]” means “[Cost], Discard this card: Search your library for a card with the same mana value as the discarded card, reveal that card, and put it into your hand. Then shuffle your library. Activate only as a sorcery.”
+ **702.53**b Although the transmute ability can be activated only if the card is in a player’s hand, it continues to exist while the object is on the battlefield and in all other zones. Therefore objects with transmute will be affected by effects that depend on objects having one or more activated abilities.

**702.54.** Bloodthirst
+ **702.54**a Bloodthirst is a static ability. “Bloodthirst N” means “If an opponent was dealt damage this turn, this permanent enters the battlefield with N +1/+1 counters on it.”
+ **702.54**b “Bloodthirst X” is a special form of bloodthirst. “Bloodthirst X” means “This permanent enters the battlefield with X +1/+1 counters on it, where X is the total damage your opponents have been dealt this turn.”
+ **702.54**c If an object has multiple instances of bloodthirst, each applies separately.

**702.55.** Haunt
+ **702.55**a Haunt is a triggered ability. “Haunt” on a permanent means “When this permanent is put into a graveyard from the battlefield, exile it haunting target creature.” “Haunt” on an instant or sorcery spell means “When this spell is put into a graveyard during its resolution, exile it haunting target creature.”
+ **702.55**b Cards that are in the exile zone as the result of a haunt ability “haunt” the creature targeted by that ability. The phrase “creature it haunts” refers to the object targeted by the haunt ability, regardless of whether or not that object is still a creature.
+ **702.55**c Triggered abilities of cards with haunt that refer to the haunted creature can trigger in the exile zone.

**702.56.** Replicate
+ **702.56**a Replicate is a keyword that represents two abilities. The first is a static ability that functions while the spell with replicate is on the stack. The second is a triggered ability that functions while the spell with replicate is on the stack. “Replicate [cost]” means “As an additional cost to cast this spell, you may pay [cost] any number of times” and “When you cast this spell, if a replicate cost was paid for it, copy it for each time its replicate cost was paid. If the spell has any targets, you may choose new targets for any of the copies.” Paying a spell’s replicate cost follows the rules for paying additional costs in rules 601.2b and 601.2f–h.
+ **702.56**b If a spell has multiple instances of replicate, each is paid separately and triggers based on the payments made for it, not any other instance of replicate.

**702.57.** Forecast
+ **702.57**a A forecast ability is a special kind of activated ability that can be activated only from a player’s hand. It’s written “Forecast — [Activated ability].”
+ **702.57**b A forecast ability may be activated only during the upkeep step of the card’s owner and only once each turn. The controller of the forecast ability reveals the card with that ability from their hand as the ability is activated. That player plays with that card revealed in their hand until it leaves the player’s hand or until a step or phase that isn’t an upkeep step begins, whichever comes first.

**702.58.** Graft
+ **702.58**a Graft represents both a static ability and a triggered ability. “Graft N” means “This permanent enters the battlefield with N +1/+1 counters on it” and “Whenever another creature enters the battlefield, if this permanent has a +1/+1 counter on it, you may move a +1/+1 counter from this permanent onto that creature.”
+ **702.58**b If a permanent has multiple instances of graft, each one works separately.

**702.59.** Recover
+ **702.59**a Recover is a triggered ability that functions only while the card with recover is in a player’s graveyard. “Recover [cost]” means “When a creature is put into your graveyard from the battlefield, you may pay [cost]. If you do, return this card from your graveyard to your hand. Otherwise, exile this card.”

**702.60.** Ripple
+ **702.60**a Ripple is a triggered ability that functions only while the card with ripple is on the stack. “Ripple N” means “When you cast this spell, you may reveal the top N cards of your library, or, if there are fewer than N cards in your library, you may reveal all the cards in your library. If you reveal cards from your library this way, you may cast any of those cards with the same name as this spell without paying their mana costs, then put all revealed cards not cast this way on the bottom of your library in any order.”
+ **702.60**b If a spell has multiple instances of ripple, each triggers separately.

**702.61.** Split Second
+ **702.61**a Split second is a static ability that functions only while the spell with split second is on the stack. “Split second” means “As long as this spell is on the stack, players can’t cast other spells or activate abilities that aren’t mana abilities.”
+ **702.61**b Players may activate mana abilities and take special actions while a spell with split second is on the stack. Triggered abilities trigger and are put on the stack as normal while a spell with split second is on the stack.
+ **702.61**c Multiple instances of split second on the same spell are redundant.

**702.62.** Suspend
+ **702.62**a Suspend is a keyword that represents three abilities. The first is a static ability that functions while the card with suspend is in a player’s hand. The second and third are triggered abilities that function in the exile zone. “Suspend N—[cost]” means “If you could begin to cast this card by putting it onto the stack from your hand, you may pay [cost] and exile it with N time counters on it. This action doesn’t use the stack,” and “At the beginning of your upkeep, if this card is suspended, remove a time counter from it,” and “When the last time counter is removed from this card, if it’s exiled, play it without paying its mana cost if able. If you can’t, it remains exiled. If you cast a creature spell this way, it gains haste until you lose control of the spell or the permanent it becomes.”
+ **702.62**b A card is “suspended” if it’s in the exile zone, has suspend, and has a time counter on it.
+ **702.62**c While determining if you could begin to cast a card with suspend, take into consideration any effects that would prohibit that card from being cast.
+ **702.62**d Casting a spell as an effect of its suspend ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

**702.63.** Vanishing
+ **702.63**a Vanishing is a keyword that represents three abilities. “Vanishing N” means “This permanent enters the battlefield with N time counters on it,” “At the beginning of your upkeep, if this permanent has a time counter on it, remove a time counter from it,” and “When the last time counter is removed from this permanent, sacrifice it.”
+ **702.63**b Vanishing without a number means “At the beginning of your upkeep, if this permanent has a time counter on it, remove a time counter from it” and “When the last time counter is removed from this permanent, sacrifice it.”
+ **702.63**c If a permanent has multiple instances of vanishing, each works separately.

**702.64.** Absorb
+ **702.64**a Absorb is a static ability. “Absorb N” means “If a source would deal damage to this creature, prevent N of that damage.”
+ **702.64**b Each absorb ability can prevent only N damage from any one source at any one time. It will apply separately to damage from other sources, or to damage dealt by the same source at a different time.
+ **702.64**c If an object has multiple instances of absorb, each applies separately.

**702.65.** Aura Swap
+ **702.65**a Aura swap is an activated ability of some Aura cards. “Aura swap [cost]” means “[Cost]: You may exchange this permanent with an Aura card in your hand.”
+ **702.65**b If either half of the exchange can’t be completed, the ability has no effect.

      Example: You activate the aura swap ability of an Aura. The only Aura card in your hand can’t enchant the permanent that’s enchanted by the Aura with aura swap. The ability has no effect.

      Example: You activate the aura swap ability of an Aura that you control but you don’t own. The ability has no effect.

**702.66.** Delve
+ **702.66**a Delve is a static ability that functions while the spell with delve is on the stack. “Delve” means “For each generic mana in this spell’s total cost, you may exile a card from your graveyard rather than pay that mana.”
+ **702.66**b The delve ability isn’t an additional or alternative cost and applies only after the total cost of the spell with delve is determined.
+ **702.66**c Multiple instances of delve on the same spell are redundant.

**702.67.** Fortify
+ **702.67**a Fortify is an activated ability of Fortification cards. “Fortify [cost]” means “[Cost]: Attach this Fortification to target land you control. Activate only as a sorcery.”
+ **702.67**b For more information about Fortifications, see rule 301, “Artifacts.”
+ **702.67**c If a Fortification has multiple instances of fortify, any of its fortify abilities may be used.

**702.68.** Frenzy
+ **702.68**a Frenzy is a triggered ability. “Frenzy N” means “Whenever this creature attacks and isn’t blocked, it gets +N/+0 until end of turn.”
+ **702.68**b If a creature has multiple instances of frenzy, each triggers separately.

**702.69.** Gravestorm
+ **702.69**a Gravestorm is a triggered ability that functions on the stack. “Gravestorm” means “When you cast this spell, copy it for each permanent that was put into a graveyard from the battlefield this turn. If the spell has any targets, you may choose new targets for any of the copies.”
+ **702.69**b If a spell has multiple instances of gravestorm, each triggers separately.

**702.70.** Poisonous
+ **702.70**a Poisonous is a triggered ability. “Poisonous N” means “Whenever this creature deals combat damage to a player, that player gets N poison counters.” (For information about poison counters, see rule 104.3d.)
+ **702.70**b If a creature has multiple instances of poisonous, each triggers separately.

**702.71.** Transfigure
+ **702.71**a Transfigure is an activated ability. “Transfigure [cost]” means “[Cost], Sacrifice this permanent: Search your library for a creature card with the same mana value as this permanent and put it onto the battlefield. Then shuffle your library. Activate only as a sorcery.”

**702.72.** Champion
+ **702.72**a Champion represents two triggered abilities. “Champion an [object]” means “When this permanent enters the battlefield, sacrifice it unless you exile another [object] you control” and “When this permanent leaves the battlefield, return the exiled card to the battlefield under its owner’s control.”
+ **702.72**b The two abilities represented by champion are linked. See rule 607, “Linked Abilities.”
+ **702.72**c A permanent is “championed” by another permanent if the latter exiles the former as the direct result of a champion ability.

**702.73.** Changeling
+ **702.73**a Changeling is a characteristic-defining ability. “Changeling” means “This object is every creature type.” This ability works everywhere, even outside the game. See rule 604.3.

**702.74.** Evoke
+ **702.74**a Evoke represents two abilities: a static ability that functions in any zone from which the card with evoke can be cast and a triggered ability that functions on the battlefield. “Evoke [cost]” means “You may cast this card by paying [cost] rather than paying its mana cost” and “When this permanent enters the battlefield, if its evoke cost was paid, its controller sacrifices it.” Casting a spell for its evoke cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

**702.75.** Hideaway
+ **702.75**a Hideaway is a triggered ability. “Hideaway N” means “When this permanent enters the battlefield, look at the top N cards of your library. Exile one of them face down and put the rest on the bottom of your library in a random order. The exiled card gains ‘The player who controls the permanent that exiled this card may look at this card in the exile zone.’”
+ **702.75**b Previously, the rules for the hideaway ability caused the permanent to enter the battlefield tapped, and the number of cards the player looked at was fixed at four. Cards printed before this rules change had the printed text “Hideaway” with no numeral after the word. Those older cards have received errata in the Oracle card reference to have “Hideaway 4” and the additional ability “[This permanent] enters the battlefield tapped.”

**702.76.** Prowl
+ **702.76**a Prowl is a static ability that functions on the stack. “Prowl [cost]” means “You may pay [cost] rather than pay this spell’s mana cost if a player was dealt combat damage this turn by a source that, at the time it dealt that damage, was under your control and had any of this spell’s creature types.” Casting a spell for its prowl cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

**702.77.** Reinforce
+ **702.77**a Reinforce is an activated ability that functions only while the card with reinforce is in a player’s hand. “Reinforce N—[cost]” means “[Cost], Discard this card: Put N +1/+1 counters on target creature.”
+ **702.77**b Although the reinforce ability can be activated only if the card is in a player’s hand, it continues to exist while the object is on the battlefield and in all other zones. Therefore objects with reinforce will be affected by effects that depend on objects having one or more activated abilities.

**702.78.** Conspire
+ **702.78**a Conspire is a keyword that represents two abilities. The first is a static ability that functions while the spell with conspire is on the stack. The second is a triggered ability that functions while the spell with conspire is on the stack. “Conspire” means “As an additional cost to cast this spell, you may tap two untapped creatures you control that each share a color with it” and “When you cast this spell, if its conspire cost was paid, copy it. If the spell has any targets, you may choose new targets for the copy.” Paying a spell’s conspire cost follows the rules for paying additional costs in rules 601.2b and 601.2f–h.
+ **702.78**b If a spell has multiple instances of conspire, each is paid separately and triggers based on its own payment, not any other instance of conspire.

**702.79.** Persist
+ **702.79**a Persist is a triggered ability. “Persist” means “When this permanent is put into a graveyard from the battlefield, if it had no -1/-1 counters on it, return it to the battlefield under its owner’s control with a -1/-1 counter on it.”

**702.80.** Wither
+ **702.80**a Wither is a static ability. Damage dealt to a creature by a source with wither isn’t marked on that creature. Rather, it causes that source’s controller to put that many -1/-1 counters on that creature. See rule 120.3.
+ **702.80**b If an object changes zones before an effect causes it to deal damage, its last known information is used to determine whether it had wither.
+ **702.80**c The wither rules function no matter what zone an object with wither deals damage from.
+ **702.80**d Multiple instances of wither on the same object are redundant.

**702.81.** Retrace
+ **702.81**a Retrace appears on some instants and sorceries. It represents a static ability that functions while the card with retrace is in a player’s graveyard. “Retrace” means “You may cast this card from your graveyard by discarding a land card as an additional cost to cast it.” Casting a spell using its retrace ability follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

**702.82.** Devour
+ **702.82**a Devour is a static ability. “Devour N” means “As this object enters the battlefield, you may sacrifice any number of creatures. This permanent enters the battlefield with N +1/+1 counters on it for each creature sacrificed this way.”
+ **702.82**b Some objects have abilities that refer to the number of creatures the permanent devoured. “It devoured” means “sacrificed as a result of its devour ability as it entered the battlefield.”
+ **702.82**c Devour [type] is a variant of devour. “Devour [type] N” means “As this object enters the battlefield, you may sacrifice any number of [type] permanents. This permanent enters the battlefield with N +1/+1 counters on it for each permanent sacrificed this way.”

**702.83.** Exalted
+ **702.83**a Exalted is a triggered ability. “Exalted” means “Whenever a creature you control attacks alone, that creature gets +1/+1 until end of turn.”
+ **702.83**b A creature “attacks alone” if it’s the only creature declared as an attacker in a given combat phase. See rule 506.5.

**702.84.** Unearth
+ **702.84**a Unearth is an activated ability that functions while the card with unearth is in a graveyard. “Unearth [cost]” means “[Cost]: Return this card from your graveyard to the battlefield. It gains haste. Exile it at the beginning of the next end step. If it would leave the battlefield, exile it instead of putting it anywhere else. Activate only as a sorcery.”

**702.85.** Cascade
+ **702.85**a Cascade is a triggered ability that functions only while the spell with cascade is on the stack. “Cascade” means “When you cast this spell, exile cards from the top of your library until you exile a nonland card whose mana value is less than this spell’s mana value. You may cast that card without paying its mana cost if the resulting spell’s mana value is less than this spell’s mana value. Then put all cards exiled this way that weren’t cast on the bottom of your library in a random order.”
+ **702.85**b If an effect allows a player to take an action with one or more of the exiled cards “as you cascade,” the player may take that action after they have finished exiling cards due to the cascade ability. This action is taken before choosing whether to cast the last exiled card or, if no appropriate card was exiled, before putting the exiled cards on the bottom of their library in a random order.
+ **702.85**c If a spell has multiple instances of cascade, each triggers separately.

**702.86.** Annihilator
+ **702.86**a Annihilator is a triggered ability. “Annihilator N” means “Whenever this creature attacks, defending player sacrifices N permanents.”
+ **702.86**b If a creature has multiple instances of annihilator, each triggers separately.

**702.87.** Level Up
+ **702.87**a Level up is an activated ability. “Level up [cost]” means “[Cost]: Put a level counter on this permanent. Activate only as a sorcery.”
+ **702.87**b Each card printed with a level up ability is known as a leveler card. It has a nonstandard layout and includes two level symbols that are themselves keyword abilities. See rule 711, “Leveler Cards.”
+ **702.87**c Some enchantments have the subtype Class and associated abilities that give them a class level. These are not the same as level up abilities and class levels do not interact with level counters. See rule 717, “Class Cards.”

**702.88.** Rebound
+ **702.88**a Rebound appears on some instants and sorceries. It represents a static ability that functions while the spell is on the stack and may create a delayed triggered ability. “Rebound” means “If this spell was cast from your hand, instead of putting it into your graveyard as it resolves, exile it and, at the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.”
+ **702.88**b Casting a spell as an effect of its rebound ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.
+ **702.88**c Multiple instances of rebound on the same spell are redundant.

**702.89.** Totem Armor
+ **702.89**a Totem armor is a static ability that appears on some Auras. “Totem armor” means “If enchanted permanent would be destroyed, instead remove all damage marked on it and destroy this Aura.”

**702.90.** Infect
+ **702.90**a Infect is a static ability.
+ **702.90**b Damage dealt to a player by a source with infect doesn’t cause that player to lose life. Rather, it causes that source’s controller to give the player that many poison counters. See rule 120.3.
+ **702.90**c Damage dealt to a creature by a source with infect isn’t marked on that creature. Rather, it causes that source’s controller to put that many -1/-1 counters on that creature. See rule 120.3.
+ **702.90**d If an object changes zones before an effect causes it to deal damage, its last known information is used to determine whether it had infect.
+ **702.90**e The infect rules function no matter what zone an object with infect deals damage from.
+ **702.90**f Multiple instances of infect on the same object are redundant.

**702.91.** Battle Cry
+ **702.91**a Battle cry is a triggered ability. “Battle cry” means “Whenever this creature attacks, each other attacking creature gets +1/+0 until end of turn.”
+ **702.91**b If a creature has multiple instances of battle cry, each triggers separately.

**702.92.** Living Weapon
+ **702.92**a Living weapon is a triggered ability. “Living weapon” means “When this Equipment enters the battlefield, create a 0/0 black Phyrexian Germ creature token, then attach this Equipment to it.”

**702.93.** Undying
+ **702.93**a Undying is a triggered ability. “Undying” means “When this permanent is put into a graveyard from the battlefield, if it had no +1/+1 counters on it, return it to the battlefield under its owner’s control with a +1/+1 counter on it.”

**702.94.** Miracle
+ **702.94**a Miracle is a static ability linked to a triggered ability. (See rule 603.11.) “Miracle [cost]” means “You may reveal this card from your hand as you draw it if it’s the first card you’ve drawn this turn. When you reveal this card this way, you may cast it by paying [cost] rather than its mana cost.”
+ **702.94**b If a player chooses to reveal a card using its miracle ability, they play with that card revealed until that card leaves their hand, that ability resolves, or that ability otherwise leaves the stack. (See rule 701.16a.)

**702.95.** Soulbond
+ **702.95**a Soulbond is a keyword that represents two triggered abilities. “Soulbond” means “When this creature enters the battlefield, if you control both this creature and another creature and both are unpaired, you may pair this creature with another unpaired creature you control for as long as both remain creatures on the battlefield under your control” and “Whenever another creature enters the battlefield under your control, if you control both that creature and this one and both are unpaired, you may pair that creature with this creature for as long as both remain creatures on the battlefield under your control.”
+ **702.95**b A creature becomes “paired” with another as the result of a soulbond ability. Abilities may refer to a paired creature, the creature another creature is paired with, or whether a creature is paired. An “unpaired” creature is one that is not paired.
+ **702.95**c When the soulbond ability resolves, if either object that would be paired is no longer a creature, no longer on the battlefield, or no longer under the control of the player who controls the soulbond ability, neither object becomes paired.
+ **702.95**d A creature can be paired with only one other creature.
+ **702.95**e A paired creature becomes unpaired if any of the following occur: another player gains control of it or the creature it’s paired with; it or the creature it’s paired with stops being a creature; or it or the creature it’s paired with leaves the battlefield.

**702.96.** Overload
+ **702.96**a Overload is a keyword that represents two static abilities that function while the spell with overload is on the stack. Overload [cost] means “You may choose to pay [cost] rather than pay this spell’s mana cost” and “If you chose to pay this spell’s overload cost, change its text by replacing all instances of the word ‘target’ with the word ‘each.’” Casting a spell using its overload ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.
+ **702.96**b If a player chooses to pay the overload cost of a spell, that spell won’t require any targets. It may affect objects that couldn’t be chosen as legal targets if the spell were cast without its overload cost being paid.
+ **702.96**c Overload’s second ability creates a text-changing effect. See rule 612, “Text-Changing Effects.”

**702.97.** Scavenge
+ **702.97**a Scavenge is an activated ability that functions only while the card with scavenge is in a graveyard. “Scavenge [cost]” means “[Cost], Exile this card from your graveyard: Put a number of +1/+1 counters equal to the power of the card you exiled on target creature. Activate only as a sorcery.”

**702.98.** Unleash
+ **702.98**a Unleash is a keyword that represents two static abilities. “Unleash” means “You may have this permanent enter the battlefield with an additional +1/+1 counter on it” and “This permanent can’t block as long as it has a +1/+1 counter on it.”

**702.99.** Cipher
+ **702.99**a Cipher appears on some instants and sorceries. It represents two abilities. The first is a spell ability that functions while the spell with cipher is on the stack. The second is a static ability that functions while the card with cipher is in the exile zone. “Cipher” means “If this spell is represented by a card, you may exile this card encoded on a creature you control” and “For as long as this card is encoded on that creature, that creature has ‘Whenever this creature deals combat damage to a player, you may copy the encoded card and you may cast the copy without paying its mana cost.’”
+ **702.99**b The term “encoded” describes the relationship between the card with cipher while in the exile zone and the creature chosen when the spell represented by that card resolves.
+ **702.99**c The card with cipher remains encoded on the chosen creature as long as the card with cipher remains exiled and the creature remains on the battlefield. The card remains encoded on that object even if it changes controller or stops being a creature, as long as it remains on the battlefield.

**702.100.** Evolve
+ **702.10**0a Evolve is a triggered ability. “Evolve” means “Whenever a creature enters the battlefield under your control, if that creature’s power is greater than this creature’s power and/or that creature’s toughness is greater than this creature’s toughness, put a +1/+1 counter on this creature.”
+ **702.10**0b A creature “evolves” when one or more +1/+1 counters are put on it as a result of its evolve ability resolving.
+ **702.10**0c A creature can’t have a greater power or toughness than a noncreature permanent.
+ **702.10**0d If a creature has multiple instances of evolve, each triggers separately.

**702.101.** Extort
+ **702.10**1a Extort is a triggered ability. “Extort” means “Whenever you cast a spell, you may pay {W/B}. If you do, each opponent loses 1 life and you gain life equal to the total life lost this way.”
+ **702.10**1b If a permanent has multiple instances of extort, each triggers separately.

**702.102.** Fuse
+ **702.10**2a Fuse is a static ability found on some split cards (see rule 709, “Split Cards”) that applies while the card with fuse is in a player’s hand. If a player casts a split card with fuse from their hand, the player may choose to cast both halves of that split card rather than choose one half. This choice is made before putting the split card with fuse onto the stack. The resulting spell is a fused split spell.
+ **702.10**2b A fused split spell has the combined characteristics of its two halves. (See rule 709.4.)
+ **702.10**2c The total cost of a fused split spell includes the mana cost of each half.
+ **702.10**2d As a fused split spell resolves, the controller of the spell follows the instructions of the left half and then follows the instructions of the right half.

**702.103.** Bestow
+ **702.10**3a Bestow represents a static ability that functions in any zone from which you could play the card it’s on. “Bestow [cost]” means “As you cast this spell, you may choose to cast it bestowed. If you do, you pay [cost] rather than its mana cost.” Casting a spell using its bestow ability follows the rules for paying alternative costs (see 601.2b and 601.2f–h).
+ **702.10**3b As a spell cast bestowed is put onto the stack, it becomes an Aura enchantment and gains enchant creature. It is a bestowed Aura spell, and the permanent it becomes as it resolves will be a bestowed Aura. These effects last until the spell or the permanent it becomes ceases to be bestowed (see rules 702.103e–g). Because the spell is an Aura spell, its controller must choose a legal target for that spell as defined by its enchant creature ability and rule 601.2c. See also rule 303.4.
+ **702.10**3c If a bestowed Aura spell is copied, the copy is also a bestowed Aura spell. Any rule that refers to a spell cast bestowed applies to the copy as well.
+ **702.10**3d When casting a spell bestowed, only its characteristics as modified by the bestow ability are evaluated to determine if it can be cast.

      Example: Aether Storm is an enchantment with the ability “Creature spells can’t be cast.” This effect doesn’t stop a creature card with bestow from being cast bestowed.

      Example: Garruk’s Horde says, in part, “You may cast creature spells from the top of your library.” If you control Garruk’s Horde and the top card of your library is a creature card with bestow, you can cast it as a creature spell, but you can’t cast it bestowed.
+ **702.10**3e As a bestowed Aura spell begins resolving, if its target is illegal, it ceases to be bestowed and the effect making it an Aura spell ends. It continues resolving as a creature spell. See rule 608.3b.
+ **702.10**3f If a bestowed Aura becomes unattached, it ceases to be bestowed. If a bestowed Aura is attached to an illegal object or player, it becomes unattached and ceases to be bestowed. This is an exception to rule 704.5m.
+ **702.10**3g If a bestowed Aura phases in unattached, it ceases to be bestowed. See rule 702.26, “Phasing.”

**702.104.** Tribute
+ **702.10**4a Tribute is a static ability that functions as the creature with tribute is entering the battlefield. “Tribute N” means “As this creature enters the battlefield, choose an opponent. That player may put an additional N +1/+1 counters on it as it enters the battlefield.”
+ **702.10**4b Objects with tribute have triggered abilities that check “if tribute wasn’t paid.” This condition is true if the opponent chosen as a result of the tribute ability didn’t have the creature enter the battlefield with +1/+1 counters as specified by the creature’s tribute ability.

**702.105.** Dethrone
+ **702.10**5a Dethrone is a triggered ability. “Dethrone” means “Whenever this creature attacks the player with the most life or tied for most life, put a +1/+1 counter on this creature.”
+ **702.10**5b If a creature has multiple instances of dethrone, each triggers separately.

**702.106.** Hidden Agenda
+ **702.10**6a Hidden agenda is a static ability that functions as a conspiracy card with hidden agenda is put into the command zone. “Hidden agenda” means “As you put this conspiracy card into the command zone, turn it face down and secretly choose a card name.”
+ **702.10**6b To secretly choose a card name, note that name on a piece of paper kept with the face-down conspiracy card.
+ **702.10**6c Any time you have priority, you may turn a face-down conspiracy card you control in the command zone face up. This is a special action. Doing so will reveal the chosen name. See rule 116.2j.
+ **702.10**6d Hidden agenda and another ability of the object with hidden agenda that refers to “the chosen name” are linked. The second ability refers only to the card name chosen as a result of that object’s hidden agenda ability. See rule 607.2d.
+ **702.10**6e If a player leaves the game, all face-down conspiracy cards controlled by that player must be revealed to all players. At the end of each game, all face-down conspiracy cards must be revealed to all players.
+ **702.10**6f Double agenda is a variant of the hidden agenda ability. As you put a conspiracy card with double agenda into the command zone, you secretly name two different cards rather than one. You don’t reveal that more than one name was secretly chosen until you reveal the chosen names.

**702.107.** Outlast
+ **702.10**7a Outlast is an activated ability. “Outlast [cost]” means “[Cost], {T}: Put a +1/+1 counter on this creature. Activate only as a sorcery.”

**702.108.** Prowess
+ **702.10**8a Prowess is a triggered ability. “Prowess” means “Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.”
+ **702.10**8b If a creature has multiple instances of prowess, each triggers separately.

**702.109.** Dash
+ **702.10**9a Dash represents three abilities: two static abilities that function while the card with dash is on the stack, one of which may create a delayed triggered ability, and a static ability that functions while the object with dash is on the battlefield. “Dash [cost]” means “You may cast this card by paying [cost] rather than its mana cost,” “If this spell’s dash cost was paid, return the permanent this spell becomes to its owner’s hand at the beginning of the next end step,” and “As long as this permanent’s dash cost was paid, it has haste.” Casting a spell for its dash cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

**702.110.** Exploit
+ **702.11**0a Exploit is a triggered ability. “Exploit” means “When this creature enters the battlefield, you may sacrifice a creature.”
+ **702.11**0b A creature with exploit “exploits a creature” when the controller of the exploit ability sacrifices a creature as that ability resolves.

**702.111.** Menace
+ **702.11**1a Menace is an evasion ability.
+ **702.11**1b A creature with menace can’t be blocked except by two or more creatures. (See rule 509, “Declare Blockers Step.”)
+ **702.11**1c Multiple instances of menace on the same creature are redundant.

**702.112.** Renown
+ **702.11**2a Renown is a triggered ability. “Renown N” means “When this creature deals combat damage to a player, if it isn’t renowned, put N +1/+1 counters on it and it becomes renowned.”
+ **702.11**2b Renowned is a designation that has no rules meaning other than to act as a marker that the renown ability and other spells and abilities can identify. Only permanents can be or become renowned. Once a permanent becomes renowned, it stays renowned until it leaves the battlefield. Renowned is neither an ability nor part of the permanent’s copiable values.
+ **702.11**2c If a creature has multiple instances of renown, each triggers separately. The first such ability to resolve will cause the creature to become renowned, and subsequent abilities will have no effect. (See rule 603.4)

**702.113.** Awaken
+ **702.11**3a Awaken appears on some instants and sorceries. It represents two abilities: a static ability that functions while the spell with awaken is on the stack and a spell ability. “Awaken N—[cost]” means “You may pay [cost] rather than pay this spell’s mana cost as you cast this spell” and “If this spell’s awaken cost was paid, put N +1/+1 counters on target land you control. That land becomes a 0/0 Elemental creature with haste. It’s still a land.” Casting a spell using its awaken ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.
+ **702.11**3b The controller of a spell with awaken chooses the target of the awaken spell ability only if that player chose to pay the spell’s awaken cost. Otherwise the spell is cast as if it didn’t have that target.

**702.114.** Devoid
+ **702.11**4a Devoid is a characteristic-defining ability. “Devoid” means “This object is colorless.” This ability functions everywhere, even outside the game. See rule 604.3.

**702.115.** Ingest
+ **702.11**5a Ingest is a triggered ability. “Ingest” means “Whenever this creature deals combat damage to a player, that player exiles the top card of their library.”
+ **702.11**5b If a creature has multiple instances of ingest, each triggers separately.

**702.116.** Myriad
+ **702.11**6a Myriad is a triggered ability that may also create a delayed triggered ability. “Myriad” means “Whenever this creature attacks, for each opponent other than defending player, you may create a token that’s a copy of this creature that’s tapped and attacking that player or a planeswalker they control. If one or more tokens are created this way, exile the tokens at end of combat.”
+ **702.11**6b If a creature has multiple instances of myriad, each triggers separately.

**702.117.** Surge
+ **702.11**7a Surge is a static ability that functions while the spell with surge is on the stack. “Surge [cost]” means “You may pay [cost] rather than pay this spell’s mana cost as you cast this spell if you or one of your teammates has cast another spell this turn.” Casting a spell for its surge cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

**702.118.** Skulk
+ **702.11**8a Skulk is an evasion ability.
+ **702.11**8b A creature with skulk can’t be blocked by creatures with greater power. (See rule 509, “Declare Blockers Step.”)
+ **702.11**8c Multiple instances of skulk on the same creature are redundant.

**702.119.** Emerge
+ **702.11**9a Emerge represents two static abilities that function while the spell with emerge is on the stack. “Emerge [cost]” means “You may cast this spell by paying [cost] and sacrificing a creature rather than paying its mana cost” and “If you chose to pay this spell’s emerge cost, its total cost is reduced by an amount of generic mana equal to the sacrificed creature’s mana value.” Casting a spell using its emerge ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.
+ **702.11**9b You choose which creature to sacrifice as you choose to pay a spell’s emerge cost (see rule 601.2b), and you sacrifice that creature as you pay the total cost (see rule 601.2h).

**702.120.** Escalate
+ **702.12**0a Escalate is a static ability of modal spells (see rule 700.2) that functions while the spell with escalate is on the stack. “Escalate [cost]” means “For each mode you choose beyond the first as you cast this spell, you pay an additional [cost].” Paying a spell’s escalate cost follows the rules for paying additional costs in rules 601.2f–h.

**702.121.** Melee
+ **702.12**1a Melee is a triggered ability. “Melee” means “Whenever this creature attacks, it gets +1/+1 until end of turn for each opponent you attacked with a creature this combat.”
+ **702.12**1b If a creature has multiple instances of melee, each triggers separately.

**702.122.** Crew
+ **702.12**2a Crew is an activated ability of Vehicle cards. “Crew N” means “Tap any number of other untapped creatures you control with total power N or greater: This permanent becomes an artifact creature until end of turn.”
+ **702.12**2b A creature “crews a Vehicle” when it’s tapped to pay the cost to activate a Vehicle’s crew ability.
+ **702.12**2c If an effect states that a creature “can’t crew Vehicles,” that creature can’t be tapped to pay the crew cost of a Vehicle.
+ **702.12**2d Some Vehicles have abilities that trigger when they become crewed. “Whenever [this Vehicle] becomes crewed” means “Whenever a crew ability of [this Vehicle] resolves.” If that ability has an intervening “if” clause that refers to information about the creatures that crewed it, it means only creatures that were tapped to pay the cost of the crew ability that caused it to trigger.

**702.123.** Fabricate
+ **702.12**3a Fabricate is a triggered ability. “Fabricate N” means “When this permanent enters the battlefield, you may put N +1/+1 counters on it. If you don’t, create N 1/1 colorless Servo artifact creature tokens.”
+ **702.12**3b If a permanent has multiple instances of fabricate, each triggers separately.

**702.124.** Partner
+ **702.12**4a Partner is an ability that modifies the rules for deck construction in the Commander variant (see rule 903), and it functions before the game begins. Rather than a single legendary creature card, you may designate two legendary creature cards as your commander if each has partner.
+ **702.12**4b Your deck must contain exactly 100 cards, including its two commanders. Both commanders begin the game in the command zone.
+ **702.12**4c A rule or effect that refers to your commander’s color identity refers to the combined color identities of your two commanders. See rule 903.4.
+ **702.12**4d Except for determining the color identity of your commander, the two commanders function independently. When casting a commander with partner, ignore how many times your other commander has been cast (see rule 903.8). When determining whether a player has been dealt 21 or more combat damage by the same commander, consider damage from each of your two commanders separately (see rule 903.10a).
+ **702.12**4e If an effect refers to your commander while you have two commanders, it refers to either one. If an effect causes you to perform an action on your commander and it could affect both, you choose which it refers to at the time the effect is applied.
+ **702.12**4f “Partner with [name]” is a variant of the partner ability. “Partner with [name]” represents two abilities. One is a static ability that modifies the rules for deck construction. Rather than a single legendary creature card, you may designate two legendary creature cards as your commander if each has a “partner with [name]” ability with the other’s name. You can’t designate two legendary cards as your commander if one has a “partner with [name]” ability and the other isn’t the named card. The other ability represented by “partner with [name]” is a triggered ability that means “When this permanent enters the battlefield, target player may search their library for a card named [name], reveal it, put it into their hand, then shuffle their library.”
+ **702.12**4g “Friends forever” is a variant of the partner ability. Friends forever modifies the rules for deck construction in the Commander variant, and it functions before the game begins. Rather than a single legendary creature card, you may designate two legendary creature cards as your commander if each has “friends forever.”
702.124h. “Choose a Background” is a variant of the partner ability that represents a static ability. “Choose a Background” means “You may designate two cards as your commander as long as one of them is this card and the other is a legendary Background enchantment.” You can’t designate two cards as your commander if one has a “choose a Background” ability and the other is not a Background enchantment, and legendary Background enchantments cannot be your commander unless you have also designated a commander with “choose a Background.”
702.124i. If an effect refers to the partner ability or cards with partner and doesn’t mention a specific variant of the partner ability by name, it is referring only to partner, partner with [name], or cards with either of those abilities, and does not refer to any other partner variant.

**702.125.** Undaunted
+ **702.12**5a Undaunted is a static ability that functions while the spell with undaunted is on the stack. Undaunted means “This spell costs {1} less to cast for each opponent you have.”
+ **702.12**5b Players who have left the game are not counted when determining how many opponents you have.
+ **702.12**5c If a spell has multiple instances of undaunted, each of them applies.

**702.126.** Improvise
+ **702.12**6a Improvise is a static ability that functions while the spell with improvise is on the stack. “Improvise” means “For each generic mana in this spell’s total cost, you may tap an untapped artifact you control rather than pay that mana.”
+ **702.12**6b The improvise ability isn’t an additional or alternative cost and applies only after the total cost of the spell with improvise is determined.
+ **702.12**6c Multiple instances of improvise on the same spell are redundant.

**702.127.** Aftermath
+ **702.12**7a Aftermath is an ability found on some split cards (see rule 709, “Split Cards”). It represents three static abilities. “Aftermath” means “You may cast this half of this split card from your graveyard,” “This half of this split card can’t be cast from any zone other than a graveyard,” and “If this spell was cast from a graveyard, exile it instead of putting it anywhere else any time it would leave the stack.”

**702.128.** Embalm
+ **702.12**8a Embalm is an activated ability that functions while the card with embalm is in a graveyard. “Embalm [cost]” means “[Cost], Exile this card from your graveyard: Create a token that’s a copy of this card, except it’s white, it has no mana cost, and it’s a Zombie in addition to its other types. Activate only as a sorcery.”
+ **702.12**8b A token is “embalmed” if it’s created by a resolving embalm ability.

**702.129.** Eternalize
+ **702.12**9a Eternalize is an activated ability that functions while the card with eternalize is in a graveyard. “Eternalize [cost]” means “[Cost], Exile this card from your graveyard: Create a token that’s a copy of this card, except it’s black, it’s 4/4, it has no mana cost, and it’s a Zombie in addition to its other types. Activate only as a sorcery.”

**702.130.** Afflict
+ **702.13**0a Afflict is a triggered ability. “Afflict N” means “Whenever this creature becomes blocked, defending player loses N life.”
+ **702.13**0b If a creature has multiple instances of afflict, each triggers separately.

**702.131.** Ascend
+ **702.13**1a Ascend on an instant or sorcery spell represents a spell ability. It means “If you control ten or more permanents and you don’t have the city’s blessing, you get the city’s blessing for the rest of the game.”
+ **702.13**1b Ascend on a permanent represents a static ability. It means “Any time you control ten or more permanents and you don’t have the city’s blessing, you get the city’s blessing for the rest of the game.”
+ **702.13**1c The city’s blessing is a designation that has no rules meaning other than to act as a marker that other rules and effects can identify. Any number of players may have the city’s blessing at the same time.
+ **702.13**1d After a player gets the city’s blessing, continuous effects are reapplied before the game checks to see if the game state or preceding events have matched any trigger conditions.

**702.132.** Assist
+ **702.13**2a Assist is a static ability that modifies the rules of paying for the spell with assist (see rules 601.2g-h). If the total cost to cast a spell with assist includes a generic mana component, before you activate mana abilities while casting it, you may choose another player. That player has a chance to activate mana abilities. Once that player chooses not to activate any more mana abilities, you have a chance to activate mana abilities. Before you begin to pay the total cost of the spell, the player you chose may pay for any amount of the generic mana in the spell’s total cost.

**702.133.** Jump-Start
+ **702.13**3a Jump-start appears on some instants and sorceries. It represents two static abilities: one that functions while the card is in a player’s graveyard and another that functions while the card is on the stack. “Jump-start” means “You may cast this card from your graveyard if the resulting spell is an instant or sorcery spell by discarding a card as an additional cost to cast it” and “If this spell was cast using its jump-start ability, exile this card instead of putting it anywhere else any time it would leave the stack.” Casting a spell using its jump-start ability follows the rules for paying additional costs in rules 601.2b and 601.2f–h.

**702.134.** Mentor
+ **702.13**4a Mentor is a triggered ability. “Mentor” means “Whenever this creature attacks, put a +1/+1 counter on target attacking creature with power less than this creature’s power.”
+ **702.13**4b If a creature has multiple instances of mentor, each triggers separately.

**702.135.** Afterlife
+ **702.13**5a Afterlife is a triggered ability. “Afterlife N” means “When this permanent is put into a graveyard from the battlefield, create N 1/1 white and black Spirit creature tokens with flying.”
+ **702.13**5b If a permanent has multiple instances of afterlife, each triggers separately.

**702.136.** Riot
+ **702.13**6a Riot is a static ability. “Riot” means “You may have this permanent enter the battlefield with an additional +1/+1 counter on it. If you don’t, it gains haste.”
+ **702.13**6b If a permanent has multiple instances of riot, each works separately.

**702.137.** Spectacle
+ **702.13**7a Spectacle is a static ability that functions on the stack. “Spectacle [cost]” means “You may pay [cost] rather than pay this spell’s mana cost if an opponent lost life this turn.” Casting a spell for its spectacle cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

**702.138.** Escape
+ **702.13**8a Escape represents a static ability that functions while the card with escape is in a player’s graveyard. “Escape [cost]” means “You may cast this card from your graveyard by paying [cost] rather than paying its mana cost.” Casting a spell using its escape ability follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.
+ **702.13**8b A spell or permanent “escaped” if that spell or the spell that became that permanent as it resolved was cast from a graveyard with an escape ability.
+ **702.13**8c An ability that reads “[This permanent] escapes with [one or more of a kind of counter]” means “If this permanent escaped, it enters the battlefield with [those counters]” That ability may have a triggered ability linked to it that triggers “When it enters the battlefield this way.” (See rule 603.11.) Such a triggered ability triggers when that permanent enters the battlefield after its replacement effect was applied, even if that replacement effect had no effect.
+ **702.13**8d An ability that reads “[This permanent] escapes with [ability]” means “If this permanent escaped, it has [ability].”

**702.139.** Companion
+ **702.13**9a Companion is a keyword ability that functions outside the game. It’s written as “Companion—[Condition].” Before the game begins, you may reveal one card you own from outside the game with a companion ability whose condition is fulfilled by your starting deck. (See rule 103.2b.) Once during the game, any time you have priority and the stack is empty, but only during a main phase of your turn, you may pay {3} and put that card into your hand. This is a special action that doesn’t use the stack (see rule 116.2g). This is a change from previous rules.
+ **702.13**9b If a companion ability refers to your starting deck, it refers to your deck after you’ve set aside any sideboard cards. In a Commander game, this is also before you’ve set aside your commander.
+ **702.13**9c Once you take the special action and put the card with companion into your hand, it remains in the game until the game ends.

**702.140.** Mutate
+ **702.14**0a Mutate appears on some creature cards. It represents a static ability that functions while the spell with mutate is on the stack. “Mutate [cost]” means “You may pay [cost] rather than pay this spell’s mana cost. If you do, it becomes a mutating creature spell and targets a non-Human creature with the same owner as this spell.” Casting a spell using its mutate ability follows the rules for paying alternative costs (see 601.2b and 601.2f–h).
+ **702.14**0b As a mutating creature spell begins resolving, if its target is illegal, it ceases to be a mutating creature spell and continues resolving as a creature spell and will be put onto the battlefield under the control of the spell’s controller.
+ **702.14**0c As a mutating creature spell resolves, if its target is legal, it doesn’t enter the battlefield. Rather, it merges with the target creature and becomes one object represented by more than one card or token (see rule 724, “Merging with Permanents”). The spell’s controller chooses whether the spell is put on top of the creature or on the bottom. The resulting permanent is a mutated permanent.
+ **702.14**0d An ability that triggers whenever a creature mutates triggers when a spell merges with a creature as a result of a resolving mutating creature spell.
+ **702.14**0e A mutated permanent has all abilities of each card and token that represents it. Its other characteristics are derived from the topmost card or token.
+ **702.14**0f Any effect that refers to or modifies the mutating creature spell refers to or modifies the mutated permanent it merges with as it resolves.

**702.141.** Encore
+ **702.14**1a Encore is an activated ability that functions while the card with encore is in a graveyard. “Encore [cost]” means “[Cost], Exile this card from your graveyard: For each opponent, create a token that’s a copy of this card that attacks that opponent this turn if able. The tokens gain haste. Sacrifice them at the beginning of the next end step. Activate only as a sorcery.”

**702.142.** Boast
+ **702.14**2a A boast ability is a special kind of activated ability. “Boast — [Cost]: [Effect]” means “[Cost]: [Effect]. Activate only if this creature attacked this turn and only once each turn.”
+ **702.14**2b Effects may refer to boast abilities. If an effect refers to a creature boasting, it means its boast ability being activated.

**702.143.** Foretell
+ **702.14**3a Foretell is a keyword that functions while the card with foretell is in a player’s hand. Any time a player has priority during their turn, that player may pay {2} and exile a card with foretell from their hand face down. That player may look at that card as long as it remains in exile. They may cast that card after the current turn has ended by paying any foretell cost it has rather than paying that spell’s mana cost. Casting a spell this way follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.
+ **702.14**3b Exiling a card using its foretell ability is a special action, which doesn’t use the stack. See rule 116, “Special Actions.”
+ **702.14**3c If an effect refers to foretelling a card, it means performing the special action associated with a foretell ability. If an effect refers to a card or spell that was foretold, it means a card put in the exile zone as a result of the special action associated with a foretell ability, or a spell that was a foretold card before it was cast, even if it was cast for a cost other than a foretell cost.
+ **702.14**3d If an effect states that a card in exile becomes foretold, that card becomes a foretold card. That effect may give the card a foretell cost. That card may be cast for any foretell cost it has after the turn it became a foretold card has ended, even if the resulting spell doesn’t have foretell.
+ **702.14**3e If a player owns multiple foretold cards in exile, they must ensure that those cards can be easily differentiated from each other and from any other face-down cards in exile which that player owns. This includes knowing both the order in which those cards were put into exile and any foretell costs other than their printed foretell costs those cards may have.
+ **702.14**3f If a player leaves the game, all face-down foretold cards that player owns must be revealed to all players. At the end of each game, all face-down foretold cards must be revealed to all players.

**702.144.** Demonstrate
+ **702.14**4a Demonstrate is a triggered ability. “Demonstrate” means “When you cast this spell, you may copy it and you may choose new targets for the copy. If you copy the spell, choose an opponent. That player copies the spell and may choose new targets for that copy.”

**702.145.** Daybound and Nightbound
+ **702.14**5a Daybound and nightbound are found on opposite faces of some transforming double-faced cards (see rule 712, “Double-Faced Cards”).
+ **702.14**5b Daybound is found on the front faces of some transforming double-faced cards and represents three static abilities. “Daybound” means “If it is night and this permanent is represented by a double-faced card, it enters the battlefield transformed,” “As it becomes night, if this permanent is front face up, transform it,” and “This permanent can’t be transformed except by its daybound ability.” See rule 725, “Day and Night.”
+ **702.14**5c Any time a player controls a permanent that is front face up with daybound and it’s night, that player transforms that permanent. This happens immediately and isn’t a state-based action.
+ **702.14**5d Any time a player controls a permanent with daybound, if it’s neither day nor night, it becomes day.
+ **702.14**5e Nightbound is found on the back faces of some transforming double-faced cards and represents two static abilities. “Nightbound” means “As it becomes day, if this permanent is back face up, transform it” and “This permanent can’t be transformed except by its nightbound ability.”
+ **702.14**5f Any time a player controls a permanent that is back face up with nightbound and it’s day, that player transforms that permanent. This happens immediately and isn’t a state-based action.
+ **702.14**5g Any time a player controls a permanent with nightbound, if it’s neither day nor night and there are no permanents with daybound on the battlefield, it becomes night.

**702.146.** Disturb
+ **702.14**6a Disturb is an ability found on the front face of some transforming double-faced cards (see rule 712, “Double-Faced Cards”). “Disturb [cost]” means “You may cast this card transformed from your graveyard by paying [cost] rather than its mana cost.” See rule 712.4b.
+ **702.14**6b A resolving transforming double-faced spell that was cast using its disturb ability enters the battlefield with its back face up.

**702.147.** Decayed
+ **702.14**7a Decayed represents a static ability and a triggered ability. “Decayed” means “This creature can’t block” and “When this creature attacks, sacrifice it at end of combat.”

**702.148.** Cleave
+ **702.14**8a Cleave is a keyword that represents two static abilities that function while a spell with cleave is on the stack. “Cleave [cost]” means “You may cast this spell by paying [cost] rather than paying its mana cost” and “If this spell’s cleave cost was paid, change its text by removing all text found within square brackets in the spell’s rules text.” Casting a spell for its cleave cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.
+ **702.14**8b Cleave’s second ability is a text-changing effect. See rule 612, “Text-Changing Effects.”

**702.149.** Training
+ **702.14**9a Training is a triggered ability. “Training” means “Whenever this creature and at least one other creature with power greater than this creature’s power attack, put a +1/+1 counter on this creature.”
+ **702.14**9b If a creature has multiple instances of training, each triggers separately.
+ **702.14**9c Some creatures with training have abilities that trigger when they train. “When this creature trains” means “When a resolving training ability puts a +1/+1 counter on this creature.”

**702.150.** Compleated
+ **702.15**0a Compleated is a static ability found on some planeswalker cards. Compleated means “If this permanent would enter the battlefield with one or more loyalty counters on it and the player who cast it chose to pay life for any part of its cost represented by Phyrexian mana symbols, it instead enters the battlefield with that many loyalty counters minus two for each of those mana symbols.”

**702.151.** Reconfigure
+ **702.15**1a Reconfigure represents two activated abilities. Reconfigure [cost] means “[Cost]: Attach this permanent to another target creature you control. Activate only as a sorcery” and “[Cost]: Unattach this permanent. Activate only if this permanent is attached to a creature and only as a sorcery.”
+ **702.15**1b Attaching an Equipment with reconfigure to another creature causes the Equipment to stop being a creature until it becomes unattached from that creature.

**702.152.** Blitz
+ **702.15**2a Blitz represents three abilities: two static abilities that function while the card with blitz is on the stack, one of which may create a delayed triggered ability, and a static ability that functions while the object with blitz is on the battlefield. “Blitz [cost]” means “You may cast this card by paying [cost] rather than its mana cost,” “If this spell’s blitz cost was paid, sacrifice the permanent this spell becomes at the beginning of the next end step,” and “As long as this permanent’s blitz cost was paid, it has haste and ‘When this permanent is put into a graveyard from the battlefield, draw a card.’” Casting a spell for its blitz cost follows the rules for paying alternative costs in rules 601.2b and 601.2f–h.

**702.153.** Casualty
+ **702.15**3a Casualty is a keyword that represents two abilities. The first is a static ability that functions while the spell with casualty is on the stack. The second is a triggered ability that functions while the spell with casualty is on the stack. Casualty N means “As an additional cost to cast this spell, you may sacrifice a creature with power N or greater,” and “When you cast this spell, if a casualty cost was paid for it, copy it. If the spell has any targets, you may choose new targets for the copy.” Paying a spell’s casualty cost follows the rules for paying additional costs in rules 601.2b and 601.2f–h.
+ **702.15**3b If a spell has multiple instances of casualty, each is paid separately and triggers based on the payments made for it, not any other instance of casualty.
