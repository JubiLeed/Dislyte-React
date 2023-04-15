import React from "react";
import "../EventsPage.css";
import { Link } from "react-router-dom";

const Patchnote320 = () => {
  return (
    <div className="patchnote-container">
      <div className="title">
        <h1>Patch 3.2.0 Details</h1>
        <span>2023-02-21</span>
      </div>
      <p>
        We will be taking Dislyte offline for a short time on February 28th,
        2023, 07:00-12:00 (UTC+0) to improve the game.
      </p>
      <p>
        Notes: <br />
        You MUST download the latest update to continue playing. Lvl 5+ players
        at the time of the update will receive 500 Nexus Crystals via in-game
        mail afterward. If the opening of servers is delayed, 100 additional
        Nexus Crystals will be compensated per hour delayed. Servers may resume
        at an earlier or later time as necessary. Pay attention to the time, as
        you will be unable to sign in during this time.
      </p>

      <p>
        ▌<strong>New Espers</strong>
        <br />
        1. <span className="legendaryEsper">Embla (Ymir) </span>: 5-Star,
        Inferno <br />
        Embla is a powerful Fighter Esper who can inflict Corrupted Seed. By
        detonating this debuff, she can also deal massive damage.
        <br /> ◇ Ability 1 (Tattered Sword): Attacks an enemy. If they are not
        already afflicted with Corrupted Seed, inflicts Corrupted Seed; if they
        are afflicted, performs a pursuit attack with this ability on another
        enemy.
        <br /> ◇ Ability 2 (Chaotic Thrust): Attacks an enemy multiple times.
        Each hit steals a buff. The 2nd hit detonates Corrupted Seed on the
        enemy, and after ascension, it infects other enemies with Corrupted
        Seed.
        <br /> ◇ Ability 3 (Desolate Flower): Attacks an enemy multiple times
        and inflicts DEF Down. When the ability ends, inflicts Corrupted Seed.
        <br /> Corrupted Seed: Enemy inflicted with this debuff ("the carrier")
        gains 1 additional Corrupted Seed stack for every attack they take. The
        caster has a chance of inflicting Diseased. Dispels 1 debuff on the
        attacker. When Corrupted Seed is detonated, deals damage to the carrier
        and inflicts Bleed. Denotation Damage per stack: A percentage of the
        original caster's ATK. (When automatically detonated, deals max stack
        damage.) Detonation: The debuff disappears before reaching max stack.
        Auto detonation: Stacks max or the carrier dies. Auto detonation infects
        the carrier's allies with this debuff and removes it from the carrier.
        The number of stacks is capped. When this debuff disappears, the
        original caster gains AP. The original caster's death removes this
        debuff.
      </p>

      <p>
        Resonance:
        <br /> ◇ R1 (Tattered Sword - Overload): Final Damage increases.
        <br /> ◇ R2 (Desolate Flower - Morph 1): Change - Desolate Flower: The
        auto detonation of Corrupted Seed also damages the carrier's allies.
        <br /> ◇ R3 (Blessing): Base ATK, Base DEF, and Base HP + 15%.
        <br /> ◇ R4 (Power Suppression): When at an elemental advantage, damage
        increases.
        <br /> ◇ R5 (Aura): Base ATK, Base DEF, and Base HP + 20%.
        <br /> ◇ R6 (Desolate Flower - Morph 2): Change - Desolate Flower: The
        damage of each stack of Corrupted Seed increases in accordance with the
        caster's ATK. Max stacks are reduced.
        <br /> → Source: Can be obtained from the Echo after this update.
      </p>

      <p>
        2. <span className="epicEsper">Parmi (Ninsun)</span> : 4-Star, Flow
        <br /> Parmi is a Controller with reliable control abilities. She can
        also deal extra damage to Incapacitated enemies.
        <br /> ◇ Ability 1 (Dreambell Curve): Attacks an enemy. Grants Recovery
        to the ally with the lowest HP percentage.
        <br /> ◇ Ability 2 (Pipedream Echo): Reduces all enemies' AP. Inflicts
        ATK Down. Deals extra damage to Incapacitated enemies.
        <br /> ◇ Ability 3 (Fantasy Crater): Attacks all enemies. Inflicts Stun.
      </p>

      <p>
        Resonance:
        <br />◇ R1 (Pipedream Echo - Overload): Pipedream Echo: Final Damage
        increases.
        <br />◇ R2 (Feral Retribution): When the target is Incapacitated, damage
        increases.
        <br />◇ R3 (Blessing): Base ATK, Base DEF, and Base HP + 15%.
        <br />◇ R4 (Rapid Wings): If an enemy is Incapacitated, allies' SPD
        increases.
        <br />◇ R5 (Aura): Base ATK, Base DEF, and Base HP + 20%.
        <br />◇ R6 (Fantasy Crater - Morph): New Effect - Fantasy Crater: After
        inflicting Stun, if the target is not Stunned, inflicts Sleep for 1 turn
        (cannot be resisted).
      </p>
      <p>
        → Source: This Esper can currently only be acquired in the Event Shop
        while Dream of Redemption is running. She will be added to Echo after
        the event has closed for a period of time.
      </p>
      <footer>
        <button>Previous Patch Notes</button>
      </footer>
    </div>
  );
};

export default Patchnote320;
