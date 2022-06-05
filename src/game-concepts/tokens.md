# **111.** Tokens

**111.1.** Some effects put tokens onto the battlefield. A token is a marker used to represent any permanent that isn’t represented by a card.

**111.2.** The player who creates a token is its owner. The token enters the battlefield under that player’s control.

**111.3.** The spell or ability that creates a token may define the values of any number of characteristics for the token. This becomes the token’s “text.” The characteristic values defined this way are functionally equivalent to the characteristic values that are printed on a card; for example, they define the token’s copiable values. A token doesn’t have any characteristics not defined by the spell or ability that created it.

    Example: Jade Mage has the ability “{2}{G}: Create a 1/1 green Saproling creature token.” The resulting token has no mana cost, supertypes, rules text, or abilities.

**111.4.** A spell or ability that creates a token sets both its name and its subtype(s). If the spell or ability doesn’t specify the name of the token, its name is the same as its subtype(s) plus the word “Token.” Once a token is on the battlefield, changing its name doesn’t change its subtype(s), and vice versa.

    Example: Dwarven Reinforcements is a sorcery that says, in part, “Create two 2/1 red Dwarf Berserker creature tokens.” The tokens created as it resolves are each named Dwarf Berserker Token and each have the creature types Dwarf and Berserker.

    Example: Minsc, Beloved Ranger says, in part, “When Minsc, Beloved Ranger enters the battlefield, create Boo, a legendary 1/1 red Hamster creature token with trample and haste.” That token’s subtype is Hamster, but because Minsc specifies that the token’s name is Boo, neither “Hamster” nor “Token” are part of its name.

    Example: Spitting Image is a sorcery that says, in part, “Create a token that’s a copy of target creature.” All of that token’s characteristics will match the copiable characteristics of the creature targeted by that spell. If Spitting Image targets Doomed Dissenter, a Human creature, the name of the token the spell creates will be Doomed Dissenter, not Human Token or Doomed Dissenter Token.

**111.5.** If a spell or ability would create a token, but a rule or effect states that a permanent with one or more of that token’s characteristics can’t enter the battlefield, the token is not created. Similarly, if an effect would create a token that is a copy of an instant or sorcery card, no token is created.

**111.6.** A token is subject to anything that affects permanents in general or that affects the token’s card type or subtype. A token isn’t a card (even if represented by a card that has a Magic back or that came from a Magic booster pack).

**111.7.** A token that’s in a zone other than the battlefield ceases to exist. This is a state-based action; see rule 704. (Note that if a token changes zones, applicable triggered abilities will trigger before the token ceases to exist.)

**111.8.** A token that has left the battlefield can’t move to another zone or come back onto the battlefield. If such a token would change zones, it remains in its current zone instead. It ceases to exist the next time state-based actions are checked; see rule 704.

**111.9.** Some effects instruct a player to create a legendary token. These may be written “create [name], a . . .” and list characteristics for the token. This is the same as an instruction to create a token with the listed characteristics that has the given name. 

**111.10.** Some effects instruct a player to create a predefined token. These effects use the definition below to determine the characteristics the token is created with. The effect that creates a predefined token may also modify or add to the predefined characteristics.
+ **111.10**a A Treasure token is a colorless Treasure artifact token with “{T}, Sacrifice this artifact: Add one mana of any color.”
+ **111.10**b A Food token is a colorless Food artifact token with “{2}, {T}, Sacrifice this artifact: You gain 3 life.”
+ **111.10**c A Gold token is a colorless Gold artifact token with “Sacrifice this artifact: Add one mana of any color.”
+ **111.10**d A Walker token is a 2/2 black Zombie creature token named Walker.
+ **111.10**e A Shard token is a colorless Shard enchantment token with “{2}, Sacrifice this enchantment: Scry 1, then draw a card.”
+ **111.10**f A Clue token is a colorless Clue artifact token with “{2}, Sacrifice this artifact: Draw a card.”
+ **111.10**g A Blood token is a colorless Blood artifact token with “{1}, {T}, Discard a card, Sacrifice this artifact: Draw a card.”

**111.11.** A copy of a permanent spell becomes a token as it resolves. The token has the characteristics of the spell that became that token. The token is not “created” for the purposes of any replacement effects or triggered abilities that refer to creating a token.
