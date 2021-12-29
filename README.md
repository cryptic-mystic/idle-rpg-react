# 🧙‍♂️ Idle RPG 

An idle RPG to save the universe

## Development Notes / Ideas

### Game Start / Overview
 As an idle game, the objective isn't for the player to constantly be present. The player should be able to set up their character and how they want to grind, leave their computer, and come back later to reap rewards and upgrade accordingly. Main risk is if you enter an area that's too difficult and getting killed, which can remove your progress for that area if you aren't well equiped.

 - Player starts only being able to explore one area.
 - Other more difficult areas are unlocked as the user gains XP.
 - XP can be spent on character spec upgrades.
 - Upgrading a character increases overall level, which unlocks more areas to explore.
 - Character can die by going to a new level immediately after unlocking without preparing.

### Areas of exploration
 - Player travels within an area to gain XP for distance traveled. Travelling faster means more XP.
 - Players can encounter random battles that earn more XP and also Money.
 - A level never ends, a player explores an area as long as they want, or until they die.

### Travelling / Mounts
 - Player starts out walking, walking requires clicking.
 - Player can unlock mounts for automatic travelling.

### Area battles
 - Player encounters random enemy encounters while exploring.
 - Battles happen automatically, but players can run if they are being outmatched. Running is the same as leaving an area.
 - If the player dies, any unspent XP is lost. Character stats, money(?) and equipment are maintained.
 - Player equipment can have elements of strength and weakness that make the better suited to one area or another.

### Upgrading a Character with XP and Money
 - Player character can spend XP on player stats. Stats are used to calculate overall player level.
 - Player can spend money on equipment at a shop. Each equipment has a lvl requirement.
 - Equipment boosts stats but doesn't factor into level.

### Battles
 - Random encounters, auto turn based battle
 - Different types of attacks: physical (swords, etc), ranged (bows, guns), special (magic)
 - Can use items for brief buffs

### Shops
 - Shops sell armor, weapons, and other character augments.
 - Shops unlock in a similar progression to Areas. Higher character level unlocks access to better shops.

## UI Notes

### Layout for React / Text based interface

 - Column layout: Player Info, Contextual Action Menu, Text Display
 - Player Info: Health, Experience, Money bars. Stats table / mgmt. Equipment mgmt.
 - Action Menu: Root - Level selection, Go to Shop; In Level - Walk, Leave, Use Item; In Battle - Use Item
 - Text Display: Root - Level description; In Level - Status, discoveries; In Battle - Attack turn reports