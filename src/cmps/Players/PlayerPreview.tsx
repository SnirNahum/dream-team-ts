import { loadPlayerInfo } from "../../store/actions/generalInfo.actions";
import PlayerImg from "../PlayerImg";
import PlayerStats from "./PlayerStats";
import PlayerBio from "./PlayerBio";
import { useEffect } from "react";
import PlayerNews from "./PlayerNews";
import FutureMatchesList from "./FutureMatchesList";
import PastMatchesList from "./PastMatchesList";

export default function PlayerPreview({ player }: any) {
  useEffect(() => {
    loadPlayer(player.id);
  }, [player.id]);

  async function loadPlayer(playerId: number) {
    await loadPlayerInfo(playerId);
  }

  return (
    <section>
      <section className="player-preview">
        <PlayerNews player={player} />
        <div className="player-preview-name">
          <PlayerImg playerCode={player.code} playerName={player.web_name} />
          <PlayerBio player={player} />
        </div>
      </section>
      <div className="player-preview-header">
        <PlayerStats player={player} />
        <div className="player-preview-matches">
          <PastMatchesList player={player} />
          <FutureMatchesList />
        </div>
      </div>
    </section>
  );
}
