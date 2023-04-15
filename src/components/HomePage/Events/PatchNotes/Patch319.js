import React from "react";
import "../EventsPage.css";
import { Link } from "react-router-dom";

const Patchnote319 = () => {
  return (
    <div className="patchnote-container">
      <div className="title">
        <h1>Patch 3.1.9 Details</h1>
        <span>2023-02-01</span>
      </div>
      <p>
        We will be taking Dislyte offline for a short time on February 7, 2023,
        07:00-10:00 (UTC+0) to improve the game. Lvl 5+ players at the time of
        the update will receive 300 Nexus Crystals via in-game mail afterward.
        If the opening of servers is delayed, 100 additional Nexus Crystals will
        be compensated per hour delayed.
      </p>
      <p>
        Notes: <br />
        Pay attention to the time, as you will be unable to sign in during this
        time.
      </p>

      <p>
        ▌<strong>New Espers</strong>
        <br />
        1. <span className="legendaryEsper">Cang Ji (Cang Jie): </span>: 5-Star,
        Inferno <br />
        Cang Ji is a Support Esper who controls HP and AP of both allies and
        enemies.
        <br /> ◇ Ability 1 (Word Launch): Attacks an enemy with extra True
        Damage based on their elemental class, inflicting Diseased.
        <br /> ◇ Ability 2 (Definitive Form): Attacks all enemies and has a
        chance of inflicting Stun. Then if an enemy is not Stunned, it has a
        chance of reducing their AP.
        <br /> ◇ Ability 3 (Cosmos Writing): Selects an ally, and triggers
        Mirror effect: raises the ally's HP percentage to the level of the enemy
        with the highest HP percentage (after ascension, it also works for AP).
        Meanwhile, it attacks all enemies. The greater the enemy's Max HP, the
        higher the damage.
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
        <br /> ◇ R1 (Cosmos Writing): Final Damage increases.
        <br /> ◇ R2 (Cosmos Writing - Morph): Change - Mirroring HP percentages
        changed to Swapping HP percentages (Swap doesn't take effect on Bosses,
        and is not regarded as damage/healing). Mirroring AP changed to Swapping
        AP (Swap doesn't take effect on Bosses, and is not regarded as AP
        Boost/AP Reduction).
        <br /> ◇ R3 (Blessing): Base ATK, Base DEF, and Base HP + 15%.
        <br /> ◇ R4 When the target's DEF is below Cang Ji's, damage increases.
        <br /> ◇ R5 (Aura): Base ATK, Base DEF, and Base HP + 20%.
        <br /> ◇ R6 (New Effect - Cosmos Writing): Before Swapping AP, raises AP
        of all allies (other than the selected ally) to the level of the
        non-Boss enemy with the highest AP (only takes effect if the enemy's AP
        is above the ally's, requires completing Ascension Phase 3).
        <br /> → Source: Can be obtained from the Echo after this update.
      </p>

      <p>
        ▌<strong>New Espers</strong>
        <br />
        1. <span className="epicEsper">Daniel (Chiron): </span>: 4-Star, Inferno{" "}
        <br />
        Daniel is a Controller with support abilities
        <br /> ◇ Ability 1 (Courage Shot): Deals damage to 1 enemy based on
        Daniel's Max HP. Has a chance of inflicting Silence. Upon successful
        infliction, gains Recovery.
        <br /> ◇ Ability 2 (Centaur's Blessing): Consumes HP to grant all allies
        Shield and ATK Up.
        <br /> ◇ Ability 3 (Meteor Flurry): Consumes HP to deal damage equal to
        a percentage of his HP, reducing enemy AP. After ascension, it also
        inflicts Stun.
      </p>
      <div className="newsBtn">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>See more News</span>
        </Link>
      </div>
    </div>
  );
};

export default Patchnote319;
