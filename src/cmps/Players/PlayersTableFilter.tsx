import { ChangeEventHandler } from "react";

type PlayersTableFilter = {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export default function PlayersTableFilter({
  value,
  onChange,
}: PlayersTableFilter) {
  return (
    <div className="filter-input">
      <input
        value={value || ""}
        onChange={onChange}
        placeholder="Search for player"
      />
    </div>
  );
}
