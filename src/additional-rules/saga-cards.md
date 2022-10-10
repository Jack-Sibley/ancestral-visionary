# **715.** Saga Cards

**715.1.** Each Saga card has a striated text box containing a number of chapter symbols. Its illustration is vertically oriented on the right side of the card, and its type line is along the bottom of the card.

**715.2.** A chapter symbol is a keyword ability that represents a triggered ability referred to as a chapter ability.
+ **715.2a** A chapter symbol includes a Roman numeral, indicated here as “{rN}.” The numeral I represents 1, II represents 2, III represents 3, and so on.
+ **715.2b** “{rN}—[Effect]” means “When one or more lore counters are put onto this Saga, if the number of lore counters on it was less than N and became at least N, [effect].”
+ **715.2c** “{rN1}, {rN2}—[Effect]” means the same as “{rN1}—[Effect]” and “{rN2}—[Effect].”
+ **715.2d** A Saga’s final chapter number is the greatest value among chapter abilities it has. If a Saga somehow has no chapter abilities, its final chapter number is 0.
+ **715.2e** A Saga’s final chapter ability is the chapter ability which has its final chapter number in its chapter symbol.

**715.3.** Sagas use lore counters to track their progress.
+ **715.3a** As a Saga without the read ahead ability enters the battlefield, its controller puts a lore counter on it. (See rule 702.155, “Read Ahead.”)
+ **715.3b** As a player’s precombat main phase begins, that player puts a lore counter on each Saga they control. This turn-based action doesn’t use the stack.

**715.4.** If the number of lore counters on a Saga permanent is greater than or equal to its final chapter number, and it isn’t the source of a chapter ability that has triggered but not yet left the stack, that Saga’s controller sacrifices it. This state-based action doesn’t use the stack.
