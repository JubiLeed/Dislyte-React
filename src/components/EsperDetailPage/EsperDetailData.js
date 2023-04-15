export const EsperDetailData = [
  {
    name: "Abigail",
    esperName: "Abigail",
    tier: "Legendary",
    charImg: "../Images/Character/AaHeadShots/square/Abigail_avatar-2.png",
    charSprite: "../Images/Character/Abigail_Frigga/Abigail_sprite.webp",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Inferno.png",
    role: "Support",
    diety: "Frigga",
    quote:
      "If you want to win, you need to sacrafice the useless pieces on the board",
    sumdesc: "She, the Frigga’s power, is the queen of the snowfields.",
    summain:
      "Abigail is a defensive Support Esper who is also good at dealing damage. When Thorny Brambles deals damage to a single target, it has a chance of inflicting Sleep. Rose Blessing grants DEF Up and a Shield to all allies. Queen’s Gift increases 1 ally’s AP. If the ally whose AP was increased has not fallen, this ability’s cooldown will be reduced.",
    pros: [
      "Support with good utilty",
      "Has attack up, absorb (lifesteal for allies) and revive an ally on skill 3",
      "Skill 2 gives defense up and shield for allies + self recovery buff",
      "Universal HP leader",
    ],
    cons: ["Skill 3 cooldown is long", "Lacks damage"],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Abigail_Frigga/thorny-brambles.png",
        name: "Thorny Brambles",
        desc: "Attacks 1 enemy. Deals 120% ATK damage. Inflicts Sleep for 1 turn. Heals 3% of Frigga's max HP.",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Abigail_Frigga/rose-blessing.png",
        name: "Rose Blessing",
        desc: "Gains Recovery for 2 turns. Grants DEF Up and a Shield to all allies for 2 turns. Shield strength equals to 13% of Frigga's max HP + 25% of the target's lost HP.",
        cooldown: "Cooldown 4 turns.",
        active: "Active",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Abigail_Frigga/queens-gift.png",
        name: "Queen's Gift",
        desc: "Increases 1 ally's AP by 100%. If the ally has fallen, revives them first and then heals 10% of their max HP. If the ally is not fallen, reduces this ability's cooldown by 3 turn(s). Grants Absorb and ATK Up to all allies for 2 turns.",
        ascend:
          "Ascension >>> If the ally has not fallen, Ability Cooldown -3 turns.",
        cooldown: "Cooldown 4 turns.",
        active: "Active",
      },
    ],

    captainsability: {
      image: "../Images/Character/Abigail_Frigga/captains_skill.png",
      desc: "Increase ally HP by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Rose Blessing - Aegis",
        gatedesc: "Rose Blessing: Final Shield Strength +10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Rose's Blessing - Morph",
        gatedesc:
          "New Effect – Rose Blessing: Dispels all debuffs from Abigail.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Law of Conjunction",
        gatedesc:
          "When granting buffs, each buff heals Abigail. Healing: 3% Max HP, up to 12% per turn.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Queen’s Gift – Morph",
        gatedesc: "New Effect – Queen’s Gift: Absorb extended to 3 turns.",
      },
    ],
    sets: [
      {
        setname: "Speed Utility",
        relicx4: "Wind x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Aegis x2",
        relicx2img: "../Images/Misc/RelicIcons/adamantineIcon.jpg",
        relicx2desc:
          "All allies start with a Shield equal to 15% of max HP. Lasts 2 turns.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },

      {
        setname: "Skills Cycling",
        relicx4: "Ocean x4",
        relicx4img: "../Images/Misc/RelicIcons/ocean-wavesIcon.jpg",
        relicx4desc:
          "Grants 30% chance of reducing all ability cooldowns by 1 turn at the start of each turn.",
        relicx2: "Aegis x2",
        relicx2img: "../Images/Misc/RelicIcons/apollos-bowIcon.jpg",
        relicx2desc: "ACC +25%",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },
    ],
  },

  {
    name: "Ahmed",
    esperName: "Ahmed",
    charImg: "images/Character/AaHeadShots/square/Ahmed_avatar.webp",
    charSprite: "../Images/Character/Ahmed_Geb/Ahmed_sprite.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Wind.png",
    role: "Support",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Geb",
    quote: "It's my job to heal and entertain.",
    sumdesc:
      "Reliable like the earth itself, Ahmed uses the powers of Geb to heal those around him.",
    summain:
      "Ahmed is a support Esper who can frequently heal allies and enhance their ATK. Prelude To Life attacks an enemy three times. Each hit heals an ally. World Stage performs a single-target heal 10 times, and reduces allied Espers' ability cooldowns. Warm Harmonics is Ahmed's core power. Each time Ahmed actively casts a healing ability, he passively heals the ally with the lowest HP%. It restores the target's max HP threshold, and grants 1 stack of Supporting Song that boosts their ATK; if the target is below 50% HP, it grants 1 more stack of Supporting Song. After ascension, Ahmed will dispel the target's Diseased effects before healing.",
    pros: [
      "Passive allows team to get reduce HP ceiling back and applies supporting song",
      "Skill 3 reduces cooldown of the team by 1 turn and heals",
      "Good in Tower against max hp ceiling reduction units and boosts team damage over time with supporting song",
      "Strong in fafnir due to skill 1 multi-hit",
    ],
    cons: [
      "Can only cleanse disease",
      "Damage is lackluster",
      "heals can be random if all espers have lost HP",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Ahmed_Geb/Ahmed_skill_1.webp",
        name: "Prelude to Life",
        desc: "Attacks an enemy 3 times, each hit deals damage equal to 15% of ATK plus 1% of max HP. Heals an ally's HP equal to 4% of the caster's max HP.",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Ahmed_Geb/Ahmed_skill_2.webp",
        name: "Warm Harmonics",
        desc: "Each time Geb casts a healing ability actively, he passively heals the ally with the lowest HP. Each 1% HP lost increases the healing amount by 0.5%. If a target suffers from a max HP penalty, restores the target's max HP threshold by 5%, clears Diseased debuffs, and applies 1 stack of Supporting Song. If the target's HP is below 50%, applies another stack of Supporting Song. Supporting Song (Undispellable): Grants a percentage of base ATK boost per stack.",
        active: "Passive",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Ahmed_Geb/Ahmed_skill_3.webp",
        name: "World Stage",
        desc: "Reduces all allies' ability cooldowns by 1 turn, and perform a single-target heal 10 times. Each heal targets the lowest HP ally, restoring their HP equal to 6% of the caster's HP. Not affected by cooldown buffs/debuffs.",
        cooldown: "Cooldown 4 turns.",
        active: "Active",
      },
    ],

    captainsability: {
      image: "../Images/Character/Ahmed_Geb/captains_skill.webp",
      desc: "Increase ally HP by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Warm Harmonics (Passive) – Remedy",
        gatedesc: "Warm Harmonics (Passive): Final Healing +10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Warm Harmonics (Passive) – Morph1",
        gatedesc:
          "New Effect – Warm Harmonics (Passive): Each Supporting Song stack grants SPD +2.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Hasty Action",
        gatedesc: "If there is an ability on cooldown, SPD +20.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Warm Harmonics (Passive) – Morph2",
        gatedesc:
          "New Effect – Warm Harmonics (Passive): When an ally with HP below 30% is attacked, attacks the attacker.",
      },
    ],
    sets: [
      {
        setname: "Speed Utility",
        relicx4: "Wind x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Aegis x2",
        relicx2img: "../Images/Misc/RelicIcons/adamantineIcon.jpg",
        relicx2desc:
          "All allies start battle with a Shield equal to 15% of max HP. Lasts 2 turns",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },

      {
        setname: "Skills Cycling",
        relicx4: "Ocean x4",
        relicx4img: "../Images/Misc/RelicIcons/ocean-wavesIcon.jpg",
        relicx4desc:
          "Grants 30% chance of reducing all ability cooldowns by 1 turn at the start of each turn.",
        relicx2: "Avatara x2",
        relicx2img: "../Images/Misc/RelicIcons/sword-avatarsIcon.jpg",
        relicx2desc:
          "Grants a 25% chance of using Counterattack upon taking damage.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },

      {
        setname: "Skills Counter Heal",
        relicx4: "Wind x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD + 25%",
        relicx2: "Aegis x2",
        relicx2img: "../Images/Misc/RelicIcons/adamantineIcon.jpg",
        relicx2desc:
          "All allies start battle with a Shield equal to 15% of max HP. Lasts 2 turns",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },
    ],
  },

  {
    name: "Ashley",
    charImg: "images/Character/AaHeadShots/square/Ashley_avatar.webp",
    charSprite: "../Images/Character/Ashley_Heimdall/Ashley_sprite.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Wind.png",
    role: "Fighter",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Heimdall",
    quote: "Nothing escapes my eyes and ears.",
    sumdesc:
      "With Heimdall's power coursing through her veins, she is the Esper Union's first and foremost impenetrable line of defense.",
    summain:
      "Ashley is a powerful Fighter with support abilities. Cloud Scatter attacks enemies and inflicts SPD Down. Divine Retribution inflicts ATK Down when attacking enemies. After ascension, it inflicts Stun on enemies whose ATK is lower than Ashley's. Daring Spirit grants DEF Up and a Shield to Ashley and ATK Up to all allies. After it attacks an enemy, Ashley gains Rainbow Bridge stacks, providing powerful buff to allies.",
    pros: [
      "Team wide attack buff",
      "Can apply attack down and stun on s2",
      "S3 gives herself a shield and defense buff",
      "Critical hits will grant AP pushing or it can deal true damage",
    ],
    cons: [
      "S2 stun requires her attack to be higher than enemy",
      "Stat hungry as she needs accuracy and high attack as well",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Ashley_Heimdall/Ashley_skill_1.webp",
        name: "Cloud Scatter",
        desc: "Attack 1 enemy. Deals 120% ATK damage. 80% chance of inflicting SPD Down for 2 turns.",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Ashley_Heimdall/Ashley_skill_2.webp",
        name: "Divine Retribution",
        desc: "Attacks all enemies. Deals 100% ATK damage. Inflicts ATK Down on them for 2 turns. If Heimdall's ATK is higher than the enemy's, 50% chance of inflicting Stun for 1 turn.",
        active: "Active",
        cooldown: "Cooldown 3 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Ashley_Heimdall/Ashley_skill_3.webp",
        name: "Daring Spirit",
        desc: "Gain DEF Up and Shield for 2 turns. Shield strength equals 200% ATK. Gains 5 Bitfrost stacks. Grants ATK Up to all allies for 2 turns. Attacks all enemies and deal 120% ATK damage.",
        ascend:
          "ASCEND: Gain DEF Up and Shield for 2 turns. Shield strength equals 200% ATK. Gains 5 Bitfrost stacks. Grants ATK Up to all allies for 2 turns. Attacks all enemies and deal 120% ATK damage. At the start of combat, gains 3 Bitfrost stacks.",
        cooldown: "Cooldown 4 turns",
        active: "Active",
      },
    ],

    captainsability: {
      image: "../Images/Character/Ashley_Heimdall/captains_skill.webp",
      desc: "Increase ally ATK by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Divine Retribution – Overload",
        gatedesc: "Divine Retribution: Final Damage +10%",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Daring Spirit – Morph",
        gatedesc:
          "New Effect – Daring Spirit: Grants Shield to all allies for 1 turn. Shield Strength:50% of Ashley’s ATK.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Targeted Constraints",
        gatedesc: "Each surviving enemy grants Acc +6% to Ashley.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Cloud Scatter– Morph",
        gatedesc: "Change – Cloud Scatter: Gains 1 Bifrost stack.",
      },
    ],
    sets: [
      {
        setname: "Speed Utility",
        relicx4: "Wind x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Recurve x2",
        relicx2img: "../Images/Misc/RelicIcons/apollos-bowIcon.jpg",
        relicx2desc: "ACC + 25%",
        Ring: "ATK% / C.DMG",
        Headphone: "ATK%",
        Boots: "SPD",
      },

      {
        setname: "Damage Dealer",
        relicx4: "War x4",
        relicx4img: "../Images/Misc/RelicIcons/war-machineIcon.jpg",
        relicx4desc: "ATK + 30%",
        relicx2: "Avatara x2",
        relicx2img: "../Images/Misc/RelicIcons/sword-avatarsIcon.jpg",
        relicx2desc:
          "Grants a 25% chance of using Counterattack upon taking damage.",
        Ring: "ATK% / C.DMG",
        Headphone: "ATK%",
        Boots: "SPD / ATK%",
      },
    ],
  },

  {
    name: "Biondina",
    esperName: "Biondina",
    charImg: "../Images/Character/AaHeadShots/square/Biondina_avatar.webp",
    charSprite: "../Images/Character/Biondina_Poseidon/Biondina_sprite.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Flow.png",
    role: "Fighter",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Poseidon",
    quote: "I'm tired of living dangerously",
    sumdesc:
      "Don't even think about troubling the seas so fiercely guarded by Poseidon.",
    summain:
      "Biondina is a Fighter Esper with access to very powerful dispels. Tsunami dispels 1 buff from an enemy at the beginning of Biondina's turn. The post-Ascension Tsunami gains a further chance of dispelling all buffs from this enemy. Biondina can quickly seize the upper hand against enemies bereft of buffs by launching attacks ignoring target DEF with Fury of the Waters",
    pros: [
      "Skill 1 can inflict buff block for bonus damage",
      "Needs at least another buff stripper if enemy team has many buffs",
      "Can ignore up to 100% defense on her skill 3 as long as enemy doesn't have any buff",
    ],
    cons: [
      "Loses damage if enemy have buffs",
      "Stat hungry as she needs accuracy and high attack as well",
      "Mostly a PvP unit",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Biondina_Poseidon/Biondina_Skill_1.webp",
        name: "Tidal Wave",
        desc: "Deals damage to an enemy equal to 120% of ATK with a 100% chance of inflicting Buff Blocker for 2 turns. If the target is unbuffed, increases the damage by 50%.",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Biondina_Poseidon/Biondina_Skill_2.webp",
        name: "Tsunami",
        desc: "Deals damage to all enemies equal to 90% of ATK and dispels 1 buff from each.",
        active: "Passive",
        ascend:
          "ASCEND: Dispels 1 buff from a random enemy with a 100% chance of dispelling all other buffs at the start of each turn. Gives priority to targets with buffs. This effect is guaranteed not to miss.",
        cooldown: "Cooldown 3 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Biondina_Poseidon/Biondina_Skill_3.webp",
        name: "Neptune's Wrath",
        desc: "Deals damage to an enemy equal to 65% of ATK plus damage to all enemies equal to 30% of ATK. Attack ignores 100% DEF of unbuffed targets, which is reduced a certain amount for each buff a target has.",
        cooldown: "Cooldown 4 turns.",
        active: "Active",
      },
    ],

    captainsability: {
      image: "../Images/Character/Biondina_Poseidon/captains_skill.webp",
      desc: "Increase ally HP by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Fury of the Waters – Overload",
        gatedesc: "Fury of the Waters: Final Damage +10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Tsunami (Passive) – Morph",
        gatedesc: "Change – Tsunami (Passive): Targets dispelled changed to 2.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Preemptive Strike",
        gatedesc:
          "For the 1st active ability Biodina casts in battle, its damage +15%.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Fury of the Waters – Morph",
        gatedesc:
          "New Effect – Fury of the Waters: Ignoring DEF no longer has a condition.",
      },
    ],
    sets: [
      {
        setname: "Damage",
        relicx4: "War x4",
        relicx4img: "../Images/Misc/RelicIcons/war-machineIcon.jpg",
        relicx4desc: "ATK +30%",
        relicx2: "Fiery x2",
        relicx2img: "../Images/Misc/RelicIcons/fiery-incandescenceIcon.jpg",
        relicx2desc: "C. Rate + 20%",
        Ring: "C.Rate / C.Dmg",
        Headphone: "ATK%",
        Boots: "SPD/ ATK%",
      },

      {
        setname: "Crit Damage",
        relicx4: "Thunder x4",
        relicx4img: "../Images/Misc/RelicIcons/hammer-of-thorIcon.jpg",
        relicx4desc: "+40% C. DMG",
        relicx2: "Fiery x2",
        relicx2img: "../Images/Misc/RelicIcons/fiery-incandescenceIcon.jpg",
        relicx2desc: "C. Rate + 20%",
        Ring: "C.Dmg",
        Headphone: "ATK%",
        Boots: "SPD/ ATK%",
      },
    ],
  },

  {
    name: "Brewster",
    charImg: "images/Character/AaHeadShots/square/Brewster_avatar.webp",
    charSprite: "../Images/Character/Brewster_Garmr/Brewster_pose.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Inferno.png",
    role: "Fighter",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Garmr",
    quote: "Shiny- woah, woah! Ugh, idiot! (Pained groans)",
    sumdesc: "The madman with Garmr's power will destroy everything in sight!",
    summain:
      "Brewster is a durable single-target Fighter Esper with access to assisting abilities. HAHAHA! has a chance of inflicting DEF Down when dealing damage to a target. Fast & Furious Stuns a target. Upon successfully Stunning, gains a number of Reload! Attack! stacks. When failing to Stun, deals additional damage. Eat This! grants a number of Reload! Attack! stacks to Brewster and attacks a target, inflicting Buff Blocker. Upon a Crit, erases the target's AP. Reload! Attack! transfers debuffs to the target and heals Brewster while he attacks. It also calls him to assist and boosts his AP while his allies attack. After ascension, this ability grants C. RATE Up to all allies.",
    pros: [
      "Team wide attack buff",
      "Skill 3 reducown of the Can apply attack down and stun on s2",
      "S3 gives herself a shield and defense buff",
      "Critical hits will grant AP pushing or it can deal true damage",
    ],
    cons: [
      "S2 stun requires her attack to be higher than enemy",
      "Stat hungry as she needs accuracy and high attack as well",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Brewster_Garmr/Brewster_Skill_1.webp",
        name: "HAHAHA!",
        desc: "Attacks 1 enemy. Damage: 100% ATK. 100% chance of inflicting DEF Down for 2 turns. If the enemy's Max HP is above Brewster's, Damage +10%. Attacks deal splash damage to 1 random enemy. Splash Damage: 50% ATK.",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Brewster_Garmr/Brewster_Skill_2.webp",
        name: "Fast & Furious",
        desc: "Attacks 1 enemy. Damage: 180% ATK. Inflicts Stun for 1 turn. Upon successful infliction, gains 2 Reload Attack buff.png Reload! Attack! stack(s); otherwise, Damage +30%.",
        active: "Active",
        cooldown: "Cooldown 3 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Brewster_Garmr/Brewster_Skill_3.webp",
        name: "Eat This!",
        desc: "Attacks 1 enemy. Damage: 240% ATK. Inflicts Buff Blocker for 2 turns. Upon a Crit, erases the enemy's AP. Gains 5 Reload Attack buff.png Reload! Attack! stack(s).",
        cooldown: "Cooldown 5 turns.",
        active: "Active",
      },
    ],

    captainsability: {
      image: "../Images/Character/BrewSter_Garmr/captains_skill.webp",
      desc: "Increase ally HP by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "HAHAHA! - Overload",
        gatedesc: "HAHAHA!: Final Damage +10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Eat This! - Morph",
        gatedesc:
          "New Effect – Eat This!: At the start of combat, gains 3 Reload! Attack! stack.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Field of Thorns",
        gatedesc:
          "If attacking an enemy while not in Brewster’s turn, damage +15%.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "HAHAHA! - Morph",
        gatedesc:
          "New Effect – HAHAHA!: When the target’s Max HP is above Brewster’s, damage +10%. Attacks deal Splash Damage to 1 random enemy. Splash Damage: 50% ATK.",
      },
    ],
    sets: [
      {
        setname: "Full Damage",
        relicx4: "Thunder x4",
        relicx4img: "../Images/Misc/RelicIcons/hammer-of-thorIcon.jpg",
        relicx4desc: "+40% C. DMG",
        relicx2: "Fiery x2",
        relicx2img: "../Images/Misc/RelicIcons/fiery-incandescenceIcon.jpg",
        relicx2desc: "C. RATE + 20%",
        Ring: "C.DMG",
        Headphone: "ATK%",
        Boots: "ATK%",
      },

      {
        setname: "Sustain",
        relicx4: "Nether x4",
        relicx4img: "../Images/Misc/RelicIcons/HadesIcon.jpg",
        relicx4desc: "+35% Lifesteal.",
        relicx2: "Fiery x2",
        relicx2img: "../Images/Misc/RelicIcons/fiery-incandescenceIcon.jpg",
        relicx2desc: "C. RATE + 20%",
        Ring: "C.DMG",
        Headphone: "ATK%",
        Boots: "SPD",
      },
    ],
  },
  {
    name: "Cang-Ji",
    charImg: "../Images/Character/AaHeadShots/square/Cang_Ji_avatar",
    charSprite: "../Images/Character/CangJi_CangJie/Cang_Ji_sprite.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Inferno.png",
    role: "Support",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Cang Jie",
    quote: "Words and history are symbols of humanity's wisdom.",
    sumdesc:
      "Cang Ji is a Support Esper who controls HP and AP of both allies and enemies.",
    summain:
      "Cang Ji is a timid one, but with the powers of Cang Jie, he feels a surge of courage coursing through his veins. Word Launch attacks an enemy with extra True Damage based on their elemental class, inflicting Diseased. Definitive Form attacks all enemies and has a chance of inflicting Stun. If any enemies are not Stunned by this effect, there will be a chance of reducing their AP. Cosmos Writing selects an ally, and raises the ally's HP percentage to the level of the enemy with the highest HP percentage (after ascension, it also works for AP). Meanwhile, it attacks all enemies. The greater the enemy's Max HP, the higher the damage.",
    pros: [
      "Team wide attack buff",
      "Skill 3 reducown of the Can apply attack down and stun on s2",
      "S3 gives herself a shield and defense buff",
      "Critical hits will grant AP pushing or it can deal true damage",
    ],
    cons: [
      "S2 stun requires her attack to be higher than enemy",
      "Stat hungry as she needs accuracy and high attack as well",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/CangJi_CangJie/Cang_Ji_skill_1.webp",
        name: "Word Launch",
        desc: "Attacks 11 enemy. Damage: 20% ATK + 80% DEF. 80% chance of inflicting Diseased debuff for 2 turns. Deals extra true damage. True damage: 5% Max HP of the non-Boss enemy with the highest Max HP, up to 100% of Cang Ji's DEF (does not work against bosses).",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/CangJi_CangJie/Cang_Ji_skill_2.webp",
        name: "Definitive Form",
        desc: "Attacks all enemies. Damage: 25% ATK + 55% DEF. 50% chance of inflicting Stun for 1 turn. If an enemy is not Stunned by this effect, dispels 1 buff, and has a 100% chance of inflicting AP -20%.",
        active: "Active",
        cooldown: "Cooldown 3 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/CangJi_CangJie/Cang_Ji_skill_3.webp",
        name: "Cosmos Writing",
        desc: "Selects 1 ally, and triggers Mirror effect: Raises the ally's HP percentage to the level of the non-Boss enemy with the highest HP percentage (only takes effect if the enemy's HP percentage is above the ally's; not regarded as damage/healing). Then, attacks all enemies. Damage: 50% of Cang Ji's DEF. Damage scales with the enemy's Max HP, up to 400%",
        ascend:
          "Ascension: Also raises AP of the same ally to the level of the non-Boss enemy with the highest AP (only takes effect if the enemy's AP is above the ally's; not regarded as AP boost).",
        active: "Active",
        cooldown: "Cooldown 4 turns",
      },
    ],

    captainsability: {
      image: "../Images/Character/CangJi_CangJie/captains_skill.webp",
      desc: "Increase ally DEF by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Cosmos Writing - Overload",
        gatedesc: "Cosmos Writing: Final Damage + 10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Cosmos Writing - Morph 1",
        gatedesc:
          "Change - Cosmos Writing: Balancing HP percentage and AP changed to swapping HP percentage and AP (swap doesn’t take effect on bosses; not regarded as damage/healing/AP boost/AP reduction).",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Shield Slam",
        gatedesc: "When the target’s DEF is below Cang Ji’s, damage + 15%.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Cosmos Writing - Morph 2",
        gatedesc:
          "New Effect - Cosmos Writing: Before swapping AP, if AP of the non-Boss enemy with the highest AP is above that of allies (other than the selected ally), balances their AP first.",
      },
    ],
    sets: [
      {
        setname: "Speed Utility",
        relicx4: "Wind Walker x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Adamantine x2",
        relicx2img: "../Images/Misc/RelicIcons/adamantineIcon.jpg",
        relicx2desc:
          "All allies start with a Shield equal to 15% of max HP. Lasts 2 turns.",
        unaII: "HP%",
        unaIV: "HP%",
        muiII: "SPD",
      },

      {
        setname: "Skills Cycling",
        relicx4: "Ocean Waves x4",
        relicx4img: "../Images/Misc/RelicIcons/ocean-wavesIcon.jpg",
        relicx4desc:
          "Grants 30% chance of reducing all ability cooldowns by 1 turn at the start of each turn.",
        relicx2: "Sword Avatara x2",
        relicx2img: "../Images/Misc/RelicIcons/sword-avatarsIcon.jpg",
        relicx2desc:
          "Grants a 25% chance of using Counterattack upon taking damage.",
        unaII: "HP%",
        unaIV: "HP%",
        muiII: "SPD",
      },

      {
        setname: "Skills Counter Heal",
        relicx4: "Wind Walker x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc:
          "Grants 30% chance of reducing all ability cooldowns by 1 turn at the start of each turn.",
        relicx2: "Adamantine x2",
        relicx2img: "../Images/Misc/RelicIcons/sword-avatarsIcon.jpg",
        relicx2desc:
          "Grants a 25% chance of using Counterattack upon taking damage.",
        unaII: "HP%",
        unaIV: "HP%",
        muiII: "SPD",
      },
    ],
  },
  {
    name: "Cecilia",
    charImg: "images/Character/AaHeadShots/square/Cecilia_avatar.webp",
    charSprite: "../Images/Character/Cecilia_Isis/Cecilia_sprite.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Shimmer.png",
    role: "Support",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Isis",
    quote: "Surrender to fate? You know, I am the ruler of my own destiny.",
    sumdesc:
      "All hail the arrival of the Witch Queen blessed by the goddess Isis.",
    summain:
      "Cecilia is a support Esper who provides team-wide healing and revival. Gemstone Feathers deals damage based on Cecilia's ATK and Max HP. Crimson Protection allows Cecilia to revive all fallen allies. After ascension, this ability will be cast upon Cecilia's death if it's not in cooldown, reviving all fallen allies at once. Ruby Coronet clears team-wide debuffs, recovers HP, and grants Immunity buff.",
    pros: [
      "Ensures all allies get to revive at least once",
      "Skill 3 cleanses, heals + provide immunity",
      "Skill 1 can heal herself",
    ],
    cons: [
      "No debuffs",
      "Skill 3 cooldown is quite long",
      "A sitting duck when skill 3 is under cooldown",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Cecilia_Isis/Cecilia_skill_1.webp",
        name: "Gemstone Feathers",
        desc: "Attacks 1 enemy. Damage: 30% ATK + 5.5% Max HP. Restores own HP. Healing: 100% damage dealt.",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Cecilia_Isis/Cecilia_skill_2.webp",
        name: "Crimson Protection",
        desc: "Revives and heals all fallen allies. Healing: 15% of the target's Max HP. Their AP + 30%. Each revived ally extends Crimson Protection's cooldown by 1 turn. Grants all allies Shield for 1 turn. Shield Strength: 50% of the target's Max HP. All allies' AP + 20%. Crimson Protection's cooldown is not affected by other effects.",
        ascend:
          "ASCEND: If Crimson Protection is not in cooldown when Cecilia dies, it will be automatically cast.",
        active: "Active",
        cooldown: "Cooldown 6 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Cecilia_Isis/Cecilia_skill_3.webp",
        name: "Ruby Coronet",
        desc: "	Dispels all ally debuffs. Grants Immunity to all allies for 1 turn. Heals all allies. Healing 35% of ally Max HP.",
        active: "Active",

        cooldown: "Cooldown 4 turns",
      },
    ],

    captainsability: {
      image: "../Images/Character/Cecilia_Isis/captains_skill.webp",
      desc: "Increase ally HP in Point War by 40%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Gemstone Feathers – Overload",
        gatedesc: "	Gemstone Feathers: Final Damage + 10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Gemstone Feathers - Morph",
        gatedesc:
          "Change - Gemstone Feathers: Healing Cecilia changed to healing both Cecilia and the ally with the lowest HP percentage",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Speed Boost",
        gatedesc: "	When an ally is currently not alive, SPD + 30%.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Crimson Protection - Morph",
        gatedesc:
          "New Effect – Crimson Protection: Revived allies' AP Boost changed to 100%.",
      },
    ],
    sets: [
      {
        setname: "Bonus Healing",
        relicx4: "Panacea x4",
        relicx4img: "../Images/Misc/RelicIcons/abiding-panaceaIcon.jpg",
        relicx4desc: "Healing Efficacy +30%",
        relicx2: "Aegis x2",
        relicx2img: "../Images/Misc/RelicIcons/adamantineIcon.jpg",
        relicx2desc:
          "All allies start with a Shield equal to 15% of max HP. Lasts 2 turns.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD / HP%",
      },

      {
        setname: "Skills Cycling",
        relicx4: "Ocean x4",
        relicx4img: "../Images/Misc/RelicIcons/ocean-wavesIcon.jpg",
        relicx4desc:
          "Grants 30% chance of reducing all ability cooldowns by 1 turn at the start of each turn.",
        relicx2: "Avatara x2",
        relicx2img: "../Images/Misc/RelicIcons/sword-avatarsIcon.jpg",
        relicx2desc:
          "Grants a 25% chance of using Counterattack upon taking damage.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },
      {
        setname: "Speed Utility",
        relicx4: "Wind x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Aegis x2",
        relicx2img: "../Images/Misc/RelicIcons/adamantineIcon.jpg",
        relicx2desc:
          "All allies start with a Shield equal to 15% of max HP. Lasts 2 turns.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },
    ],
  },
  {
    name: "Clara",
    charImg: "images/Character/AaHeadShots/square/Clara_avatar.webp",
    charSprite: "../Images/Character/Clara_Hera/Clara_sprite.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Inferno.png",
    role: "Support",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Hera",
    quote:
      "If anyone in the union is experiencing unusual symptoms, please report them to me.",
    sumdesc:
      "Empowered by Hera, the queen of heaven, she will free the people from their suffering.",
    summain:
      "Clara is a healing Support Esper who grants team-wide AP buffs, Immunity, and Shield. With Queen's Protection, Clara's healing removes debuffs from her targets. After ascension, any excess healing amount will be partially convertet into Shield. Hymn of Life increases AP for all allies, and provides a limited amount of healing. It also removes debuffs from them, and grants Immunity to targets without debuffs.Queen's Blessing heals the ally with the lowest HP upon attacking.",
    pros: [
      "Passive cleanses 1 debuff and grants ally shield if healing is excess",
      "Skill 1 does some healing to 2 allies",
      "Skill 3 heals, cleanses, gives immunity + pushes team forward",
    ],
    cons: ["Lacks damage"],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Clara_Hera/Clara_skill_1.webp",
        name: "Queen's Blessing",
        desc: "Attacks 1 enemy. Damage: 110% ATK. Heals 1 allies. Prioritizes allies with the lowest HP percentage. Healing: 5% of Clara's Max HP.",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Clara_Hera/Clara_skill_2.webp",
        name: "Queen's Protection",
        desc: "	Upon healing allies, dispels 1 debuff from them.",
        ascend:
          "ASCEND: When healing amount exceeds the limit, grants Shield for 2 turns. Shield Strength: 120% of excess healing amount.",
        active: "Passive",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Clara_Hera/Clara_skill_3.webp",
        name: "Hymn of Life",
        desc: "All allies' AP +20%. Heals all allies. Healing: 35% of their Max HP. Dispels 1 debuff from each ally. Grants Immunity to allies without debuffs for 1 turn.",
        active: "Active",
        cooldown: "Cooldown 4 turns",
      },
    ],

    captainsability: {
      image: "../Images/Character/Clara_Hera/captains_skill.webp",
      desc: "Increase ally DEF in Point War by 40%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Queen's Blessing - Remedy",
        gatedesc: "Queen's Blessing: Final Healing + 10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Hymn of Life - Morph",
        gatedesc:
          "Change - Hymn of Life: Immunity buff.png Immunity extended to 2 turns.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Reinforced Barrier",
        gatedesc: "	Grants Base DEF + 20% to allies with Shield.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Queen;s Blessing - Morph",
        gatedesc:
          "Change - Queen's Blessing: Healing times changed to 3 times.",
      },
    ],
    sets: [
      {
        setname: "Speed Utility",
        relicx4: "Wind x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Aegis x2",
        relicx2img: "../Images/Misc/RelicIcons/adamantineIcon.jpg",
        relicx2desc:
          "All allies start with a Shield equal to 15% of max HP. Lasts 2 turns.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },

      {
        setname: "Skills Cycling",
        relicx4: "Ocean Waves x4",
        relicx4img: "../Images/Misc/RelicIcons/ocean-wavesIcon.jpg",
        relicx4desc:
          "Grants 30% chance of reducing all ability cooldowns by 1 turn at the start of each turn.",
        relicx2: "Sword Avatara x2",
        relicx2img: "../Images/Misc/RelicIcons/sword-avatarsIcon.jpg",
        relicx2desc:
          "Grants a 25% chance of using Counterattack upon taking damage.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },
    ],
  },

  {
    name: "Donar",
    charImg: "images/Character/AaHeadShots/square/Donar_avatar.webp",
    charSprite: "../Images/Character/Donar_Thor/Donar_sprite_new.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Flow.png",
    role: "Defender",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Thor",
    quote: "A brave warrior doesn't bow to adversity.",
    sumdesc:
      "Having gained the power of Thor, the mighty Donar was confident he could crush any enemy that stood in his way.",
    summain:
      "Donar is a powerful Fighter who can convert DEF into damage. Thundercrack (Passive) turns Donar into a conductor which unleashes the power of thunder at the start of the next turn, dealing heavy damage to all enemies. Donar's Explosions in the Sky inflict a brutal attack on an enemy while granting Immunity and DEF Up to enhance his survivability and damage.",
    pros: [
      "Team def and immunity buff",
      "Constant damage to enemies",

      "Can apply attack down on skill 1",

      "Solo farmer for Purgatory XP stages",

      "Can solo Kronos 10 and fodder farm",
    ],
    cons: [
      "Needs high crit rate allies to benefit the skill cooldown reduction on skill 2",

      "Quite slow, so speed is mandatory",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Donar_Thor/Donar_skill_1.webp",
        name: "Upward Lighting",
        desc: "Attacks 1 enemy. Damage: 30% ATK + 70% DEF. 75% chance of inflicting ATK Down for 2 turns.",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Donar_Thor/Donar_skill_2.webp",
        name: "Thundercrack",
        desc: "Gains Conductor for 1 turn at the end of Donar's turn. While Conductor is active, attacks all enemies at the start of Donar's turn. Damage: 110% of Donar's DEF.",
        ascend:
          "ASCEND: If any ability triggers a Crit, Ability Cooldown -1 turn(s).",
        active: "Passive",
        cooldown: "Cooldown 3 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Donar_Thor/Donar_skill_3.webp",
        name: "Explosions in the Sky",
        desc: "Attacks 1 enemy. Damage: 80% ATK + 140% DEF. Gains DEF Up and Immunity for 2 turns",
        active: "Active",
        cooldown: "Cooldown 4 turns",
      },
    ],

    captainsability: {
      image: "../Images/Character/Donar_Thor/captains_skill.webp",
      desc: "Increase ally DEF by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Thundercrack (Passive) - Overload",
        gatedesc: "Thundercrack (Passive): Final Damage + 10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Thundercrack (Passive) - Morph",
        gatedesc:
          "New Effect – Thundercrack (Passive): When Thunder Blessing reaches max stacks, gains 1 turn.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Shield Slam",
        gatedesc: "When the target's DEF is below Donar's, damage +15%.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Explosions in the Sky - Morph",
        gatedesc:
          "New Effect – Explosions in the Sky: Resets the cooldown for Thundercrack (Passive). Gains 2 Thunder Blessing stacks.",
      },
    ],
    sets: [
      {
        setname: "Speed Utility",
        relicx4: "Wind x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Stonevein x2",
        relicx2img: "../Images/Misc/RelicIcons/Stonevein.webp",
        relicx2desc: "DEF +25%",
        Ring: "DEF%",
        Headphone: "DEF%",
        Boots: "SPD",
      },

      {
        setname: "Life Steal",
        relicx4: "Nether x4",
        relicx4img: "../Images/Misc/RelicIcons/HadesIcon.jpg",
        relicx4desc: "+35% Lifesteal.",

        relicx2: "Stonevein x2",
        relicx2img: "../Images/Misc/RelicIcons/Stonevein.webp",
        relicx2desc: "DEF +25%",
        Ring: "DEF% / C.RATE",
        Headphone: "DEF%",
        Boots: "SPD",
      },
    ],
  },

  {
    name: "Embla",
    charImg: "images/Character/AaHeadShots/square/Embla_avatar.webp",
    charSprite: "../Images/Character/Embla_Ymir/Embla_pose_sprite.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Inferno.png",
    role: "Fighter",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Ymir",
    quote: "Only destruction can make me feel alive.",
    sumdesc:
      "Embla, who possesses the divine power of Ymir, is like an empty vessel without a soul. Only destruction gives her meaning and purpose.",
    summain:
      "Embla is a powerful Fighter Esper who can inflict Corrupted Seed. By detonating this debuff, she can also deal massive damage. Tattered Sword attacks an enemy and inflicts Corrupted Seed if they are not already afflicted with this debuff. If the enemy is already afflicted with it, Embla performs a Pursuit attack with this ability on another target. Chaotic Thrust attacks an enemy 2 times. Each hit steals 1 buff, and the 2nd hit detonates Corrupted Seed on the enemy. After ascension, the 2nd hit can also infect other enemies with Corrupted Seed. Desolate Flower attacks an enemy 2 times and inflicts DEF Down. Afterward, it inflicts Corrupted Seed on the enemy.",
    pros: [
      "Strong single target esper",
      "Corrupted Seed detonation can cause massive damage",
      "Powerful debuffs",
    ],
    cons: [
      "Requires high investment",
      "Debuff can be mitigated through cleanse or immunity buffs",
      "Can't debuff on kill",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Embla_Ymir/Embla_skill_1.webp",
        name: "Tattered Sword",
        desc: "Attacks 1 enemy. Damage: 120% ATK. If the enemy is not afflicted with Corrupted Seed, inflicts 1 Corrupted Seed stack. If the enemy is afflicted with Corrupted Seed, performs a Pursuit attack on another random enemy with Tattered Sword (triggers once per turn).",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Embla_Ymir/Embla_skill_2.webp",
        name: "Chaotic Thrust",
        desc: "Attacks 1 enemy 2 times. Damage per hit: 110% ATK. Steals 1 buff. The 2nd hit detonates the enemy's Corrupted Seed.",
        ascend: "ASCEND: Infects another enemy with Corrupted Seed.",
        active: "Active",
        cooldown: "Cooldown 3 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Embla_Ymir/Embla_skill_3.webp",
        name: "Desolate Flower",
        desc: "Attacks 1 enemy 2 times. Damage per hit: 130% ATK. Each hit has a 80% chance of inflicting DEF Down for 2 turns. Inflicts 1 Corrupted Seed stack.",
        active: "Active",
        cooldown: "Cooldown 4 turns",
      },
    ],

    captainsability: {
      image: "../Images/Character/Embla_Ymir/captains_skill.webp",
      desc: "Increases ally C. RATE in Point War by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Tattered Sword - Overload",
        gatedesc: "Tattered Sword: Final Damage + 10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Desolate Flowe - Morph 1",
        gatedesc:
          "Change - Desolate Flower: The auto detonation of Corrupted Seed also damages targets other than the carrier. Damage: 150% of the caster's ATK.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Power Suppression",
        gatedesc: "When at an elemental advantage, Damage + 15%.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Desolate Flower - Morph 2",
        gatedesc:
          "Change - Desolate Flower : Each stack of Corrupted Seed grants ATK + 60%. Max stacks reduced to 5.",
      },
    ],
    sets: [
      {
        setname: "Full Damage",
        relicx4: "Thunder x4",
        relicx4img: "../Images/Misc/RelicIcons/hammer-of-thorIcon.jpg",
        relicx4desc: "+40% C. DMG",

        relicx2: "Fiery x2",
        relicx2img: "../Images/Misc/RelicIcons/fiery-incandescenceIcon.jpg",
        relicx2desc: "C. RATE + 20%",

        Ring: "C.DMG",
        Headphone: "ATK%",
        Boots: "ATK% / SPD",
      },

      {
        setname: "Full Damage",
        relicx4: "War x4",
        relicx4img: "../Images/Misc/RelicIcons/war-machineIcon.jpg",
        relicx4desc: "ATK + 30%",
        relicx2: "Fiery x2",
        relicx2img: "../Images/Misc/RelicIcons/fiery-incandescenceIcon.jpg",
        relicx2desc: "C. RATE + 20%",

        Ring: "C.DMG",
        Headphone: "ATK%",
        Boots: "ATK% / SPD",
      },
    ],
  },
  {
    name: "Elliot",
    charImg: "images/Character/AaHeadShots/square/Elliot_avatar.webp",
    charSprite: "../Images/Character/Elliot_Thoth/Elliot_sprite.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Inferno.png",
    role: "Controller",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Thoth",
    quote: "I prefer to read books alone.",
    sumdesc:
      "With the prowess of Thoth, the God of Wisdom, he is known to all as a walking library.",
    summain:
      "Elliot is a powerful single-target Controller. Scholar Star has a chance of Taunting an enemy when dealing damage to them. Sharp Stratagem attacks an enemy 3 times, has a chanve of Taunting the,, and grants a Shield to Elliot. Pure Enlightenment dispels all buffs from its target, extends the target's ability cooldowns to the max number of turns, and grants CRIT RESIST to Elliot. After ascension, its cooldown will be reduces when Elliot is attacked.",
    pros: [
      "Dispels all buffs and increases ability cooldown on a single target via s3 (and also reduces his own when hit).",

      "S2 cannot miss and can taunt + give shield to himself",

      "Naturally tanky due to his high base hp and kit",

      "S1 can taunt enemy",
    ],
    cons: [
      "Low base attack",

      "Low base defense for a bruiser type unit",

      "No AoE attacks",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Elliot_Thoth/Elliot_skill_1.webp",
        name: "Scholar Star",
        desc: "Attacks 1 enemy. Damage: 30% ATK + 4.5% Max HP. 80% chance of inflicting Taunt for 1 turn.",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Elliot_Thoth/Elliot_skill_2.webp",
        name: "Sharp Stratagem",
        desc: "Attacks 1 enemy 3 times. Damage: 20% ATK + 3% Max HP. Each hit has a 50% chance of inflicting Taunt for 2 turns. Gains Shield for 2 turns. Shield Strength: 25% Max HP. This ability won't miss.",
        active: "Active",
        cooldown: "Cooldown 4 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Elliot_Thoth/Elliot_skill_3.webp",
        name: "Pure Enlightenment",
        desc: "Attacks 1 enemy. Damage: 270% ATK. Dispels all buffs from the enemy. Extends all their Ability Cooldowns to the max number of turns. Gains CritRes buff.png CRIT RESIST for 2 turns.",
        ascend:
          "ASCEND: When attacked, Ability Cooldown -1 turn (triggers 1 time per turn).",
        active: "Active",
        cooldown: "Cooldown 5 turns",
      },
    ],

    captainsability: {
      image: "../Images/Character/Elliot_Thoth/captains_skill.webp",
      desc: "Increases ally HP in Holobattle by 40%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Pure Enlightenment - Overload",
        gatedesc: "Pure Enlightenment: Final Damage + 10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Sharp Stratagem - Morph",
        gatedesc:
          "New Effect – Sharp Stratagem: Upon successfully inflicting Taunt, all Ability Cooldowns of the target +1 turn.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Self Sacrafice",
        gatedesc:
          "When attacking, consumes 5% Max HP and deals True Damage. True Damage: 100% of consumed HP.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Pure Enlightenment - Morph",
        gatedesc:
          "New Effect – Pure Enlightenment: This ability can't be resisted.",
      },
    ],
    sets: [
      {
        setname: "Bruiser",
        relicx4: "Walker x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Recurve x2",
        relicx2img: "../Images/Misc/RelicIcons/apollos-bowIcon.jpg",
        relicx2desc: "ACC + 25%",

        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },

      {
        setname: "Skills Cycling",
        relicx4: "Ocean Waves x4",
        relicx4img: "../Images/Misc/RelicIcons/ocean-wavesIcon.jpg",
        relicx4desc:
          "Grants 30% chance of reducing all ability cooldowns by 1 turn at the start of each turn.",
        relicx2: "Recurve x2",
        relicx2img: "../Images/Misc/RelicIcons/apollos-bowIcon.jpg",
        relicx2desc: "ACC + 25%",

        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },
    ],
  },

  {
    name: "Everett",
    charImg: "images/Character/AaHeadShots/square/Brewster_avatar.webp",
    charSprite: "../Images/Character/Brewster_Garmr/Brewster_pose.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Inferno.png",
    role: "Fighter",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Garmr",
    quote: "",
    sumdesc: "",
    summain: "",
    pros: [
      "Team wide attack buff",
      "Skill 3 reducown of the Can apply attack down and stun on s2",
      "S3 gives herself a shield and defense buff",
      "Critical hits will grant AP pushing or it can deal true damage",
    ],
    cons: [
      "S2 stun requires her attack to be higher than enemy",
      "Stat hungry as she needs accuracy and high attack as well",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/CangJi_CangJie/Cang_Ji_skill_1.webp",
        name: "",
        desc: "",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/CangJi_CangJie/Cang_Ji_skill_2.webp",
        name: "",
        desc: "",
        active: "Active",
        cooldown: "Cooldown 3 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/CangJi_CangJie/Cang_Ji_skill_3.webp",
        name: "",
        desc: "",
        ascend: "ASCEND:",
        active: "Active",
        cooldown: "Cooldown 4 turns",
      },
    ],

    captainsability: {
      image: "../Images/Character/CangJi_CangJie/captains_skill.webp",
      desc: "Increase ally DEF by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "",
        gatedesc: "",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "",
        gatedesc: "",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "",
        gatedesc: "",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "",
        gatedesc: "",
      },
    ],
    sets: [
      {
        setname: "Speed Utility",
        relicx4: "Wind Walker x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Adamantine x2",
        relicx2img: "../Images/Misc/RelicIcons/admantineIcon.jpg",
        relicx2desc:
          "All allies start with a Shield equal to 15% of max HP. Lasts 2 turns.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },

      {
        setname: "Skills Cycling",
        relicx4: "Ocean Waves x4",
        relicx4img: "../Images/Misc/RelicIcons/ocean-wavesIcon.jpg",
        relicx4desc:
          "Grants 30% chance of reducing all ability cooldowns by 1 turn at the start of each turn.",
        relicx2: "Sword Avatara x2",
        relicx2img: "../Images/Misc/RelicIcons/sword-avatarsIcon.jpg",
        relicx2desc:
          "Grants a 25% chance of using Counterattack upon taking damage.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },
    ],
  },
  {
    name: "Fatum-Sisters",
    charImg: "images/Character/AaHeadShots/square/Brewster_avatar.webp",
    charSprite: "../Images/Character/Brewster_Garmr/Brewster_pose.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Inferno.png",
    role: "Fighter",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Garmr",
    quote: "",
    sumdesc: "",
    summain: "",
    pros: [
      "Team wide attack buff",
      "Skill 3 reducown of the Can apply attack down and stun on s2",
      "S3 gives herself a shield and defense buff",
      "Critical hits will grant AP pushing or it can deal true damage",
    ],
    cons: [
      "S2 stun requires her attack to be higher than enemy",
      "Stat hungry as she needs accuracy and high attack as well",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/CangJi_CangJie/Cang_Ji_skill_1.webp",
        name: "",
        desc: "",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/CangJi_CangJie/Cang_Ji_skill_2.webp",
        name: "",
        desc: "",
        active: "Active",
        cooldown: "Cooldown 3 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/CangJi_CangJie/Cang_Ji_skill_3.webp",
        name: "",
        desc: "",
        ascend: "ASCEND:",
        active: "Active",
        cooldown: "Cooldown 4 turns",
      },
    ],

    captainsability: {
      image: "../Images/Character/CangJi_CangJie/captains_skill.webp",
      desc: "Increase ally DEF by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "",
        gatedesc: "",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "",
        gatedesc: "",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "",
        gatedesc: "",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "",
        gatedesc: "",
      },
    ],
    sets: [
      {
        setname: "Speed Utility",
        relicx4: "Wind Walker x4",
        relicx4img: "../Images/Misc/RelicIcons/wind-walker.jpg",
        relicx4desc: "SPD +25%",
        relicx2: "Adamantine x2",
        relicx2img: "../Images/Misc/RelicIcons/admantineIcon.jpg",
        relicx2desc:
          "All allies start with a Shield equal to 15% of max HP. Lasts 2 turns.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },

      {
        setname: "Skills Cycling",
        relicx4: "Ocean Waves x4",
        relicx4img: "../Images/Misc/RelicIcons/ocean-wavesIcon.jpg",
        relicx4desc:
          "Grants 30% chance of reducing all ability cooldowns by 1 turn at the start of each turn.",
        relicx2: "Sword Avatara x2",
        relicx2img: "../Images/Misc/RelicIcons/sword-avatarsIcon.jpg",
        relicx2desc:
          "Grants a 25% chance of using Counterattack upon taking damage.",
        Ring: "HP%",
        Headphone: "HP%",
        Boots: "SPD",
      },
    ],
  },

  {
    name: "Leora",
    charImg: "images/Character/AaHeadShots/square/Leora_avatar.webp",
    charSprite: "../Images/Character/Leora_Athena/Leora_story_sprite.webp",
    typeImg: "../Images/Misc/Stars_TypeIcons/Flow.png",
    role: "Fighter",
    starsImg: "../Images/Misc/Stars_TypeIcons/5star.webp",
    tier: "Legendary",
    diety: "Athena",
    quote: "Don't worry. I'll return with a victory",
    sumdesc:
      "Brave and heroic, Leora, blessed by the War Goddess Athena, is like the dawn that pierces through the darkness.",
    summain:
      "Leora is a powerful Fighter with the ability to assist the team. Forward Strike attacks 1 enemy, reduces the enemy's AP, and inflicts Sear. This ability also has a passive effect that resets all of Leora's Ability Cooldowns at the start of combat. Dawn Guardian grants all allies Standoff and attacks 1 enemy. Before casting this ability, Leora enters or extends War Goddess mode. After ascension, each surviving ally (excluding Leora) increases the ability's damage. Daylight Beam grants Invincibility and ATK Up to Leora. It attacks 1 enemy (before attacking, the ability dispels buffs on the enemy and inflicts C.RATE Down). Then, it attacks all enemies (before attacking, it inflicts C.RATE Down). Before casting this ability, Leora enters or extends War Goddess mode. War Goddess: Grants extra damage to Leora when her C.RATE equals but is not less than the enemy's, and grants Shield to allies when they take a critical hit.",

    pros: [
      "Strong Esper with survivability",
      "Powerful single and AOE attacks with some support abilities",
      "Grants Invincibility, Atk Up and dispells buffs with 3rd skill",
    ],
    cons: [
      "Requires R4 to really shine",
      "Stat hungry as she needs high C.Rate and high attack as well",
    ],
    skills: [
      {
        title: "skillone",
        image: "../Images/Character/Leora_Athena/Leora_skill_1.webp",
        name: "Forward Strike",
        desc: "Attacks 1 enemy. Damage: 120% ATK. Inflicts Sear for 2 turns. Enemy AP -15%.",
        passive:
          "Passive: At the start of combat, resets all of Leora's Ability Cooldowns",
        active: "Active",
      },
      {
        title: "skilltwo",
        image: "../Images/Character/Leora_Athena/Leora_skill_2.webp",
        name: "Dawn Guardian",
        desc: "Grants Standoff to allies below 50% HP for 2 turns. Grants Standoff to the remaining allies for 1 turn. Attacks 1 enemy. Damage: 180% ATK. Before casting this ability, Leora gains War Goddess for 1 turn. If Leora already has this buff, then duration +1 turn.",
        active: "Active",
        ascend:
          "Ascension >>> Each surviving ally (excluding Leora) grants +10% damage.",
        cooldown: "Cooldown 3 turns",
      },
      {
        title: "skillthree",
        image: "../Images/Character/Leora_Athena/Leora_skill_3.webp",
        name: "Daylight Beam",
        desc: "Gains Invincibility and ATK Up for 2 turns. Dispels all buffs on a selected enemy (can't be resisted), inflicts C.RATE Down for 3 turns, and deals damage. Damage: 50% ATK. Then, inflicts C.RATE Down on all enemies for 2 turns and deals damage. Damage: 120% ATK. Before casting this ability, Leora gains War Goddess for 1 turn; if Elaine is on Leora's team and under Night Goddess status, Leora gains War Goddess for 2 turns. If Leora already has this buff, then duration +1 turn.",
        passive:
          "Passive: At the start of combat, if Elaine is an enemy, Leora gains Dawnglow.",
        active: "Active",
        cooldown: "Cooldown 4 turns",
      },
    ],

    captainsability: {
      image: "../Images/Character/Leora_Athena/captains_skill.webp",
      desc: "Increase ally ATK by 30%",
    },
    gate: [
      {
        number: "Divine Gate 1",
        image: "../Images/Misc/ResonaceIcons/R1.webp",
        gatename: "Daylight Beam - Overload",
        gatedesc: "Daylight Beam: Final Damage + 10%.",
      },
      {
        number: "Divine Gate 2",
        image: "../Images/Misc/ResonaceIcons/R2.webp",
        gatename: "Daylight Beam - Morph 1",
        gatedesc:
          "New Effect - Daylight Beam: C. RATE Down cannot be resisted upon a critical hit.",
      },
      {
        number: "Divine Gate 3",
        image: "../Images/Misc/ResonaceIcons/R3.webp",
        gatename: "Blessing",
        gatedesc: "Base ATK, Base DEF, and Base HP + 15%.",
      },
      {
        number: "Divine Gate 4",
        image: "../Images/Misc/ResonaceIcons/R4.webp",
        gatename: "Burst",
        gatedesc:
          "For every enemy killed, C. DMG + 15%, max + 45%. Effective in subsequent waves.",
      },
      {
        number: "Divine Gate 5",
        image: "../Images/Misc/ResonaceIcons/R5.webp",
        gatename: "Aura",
        gatedesc: "Base ATK, Base DEF, and Base HP + 20%.",
      },
      {
        number: "Divine Gate 6",
        image: "../Images/Misc/ResonaceIcons/R6.webp",
        gatename: "Daylight Beam - Morph 2",
        gatedesc:
          "New Effect - Daylight Beam: Leora will always be under War Goddess status.",
      },
    ],
    sets: [
      {
        setname: "Full Damage",
        relicx4: "Thunder x4",
        relicx4img: "../Images/Misc/RelicIcons/hammer-of-thorIcon.jpg",
        relicx4desc: "+40% C. DMG",

        relicx2: "Fiery x2",
        relicx2img: "../Images/Misc/RelicIcons/fiery-incandescenceIcon.jpg",
        relicx2desc: "C. RATE + 20%",

        Ring: "C.DMG",
        Headphone: "ATK%",
        Boots: "ATK% / SPD",
      },

      {
        setname: "Full Damage",
        relicx4: "War x4",
        relicx4img: "../Images/Misc/RelicIcons/war-machineIcon.jpg",
        relicx4desc: "ATK + 30%",
        relicx2: "Fiery x2",
        relicx2img: "../Images/Misc/RelicIcons/fiery-incandescenceIcon.jpg",
        relicx2desc: "C. RATE + 20%",

        Ring: "C.DMG",
        Headphone: "ATK%",
        Boots: "ATK% / SPD",
      },

      {
        setname: "Counter",
        relicx4: "Thunder x4",
        relicx4img: "../Images/Misc/RelicIcons/hammer-of-thorIcon.jpg",
        relicx4desc: "+40% C. DMG",

        relicx2: "Avatara x2",
        relicx2img: "../Images/Misc/RelicIcons/sword-avataraIcon.jpg",
        relicx2desc: "C. RATE + 20%",

        Ring: "C.DMG",
        Headphone: "ATK%",
        Boots: "ATK% / SPD",
      },
    ],
  },
];
