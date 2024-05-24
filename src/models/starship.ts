/**
 * Describes a Star Wars Starship.
 */
export type StarshipDto = {
	/**
	 * The unique identifier of the starship.
	 */
	id: string;

	/**
	 * The name of this starship. The common name, such as "Death Star".
	 */
	name: string;

	/**
	 * The model or official name of this starship. Such as "T-65 X-wing" or
	 * "DS-1 Orbital Battle Station".
	 */
	model: string;

	/**
	 * The class of this starship, such as "Starfighter" or
	 * "Deep Space Mobile Battlestation"
	 */
	starshipClass: string;

	/**
	 * A collection of manufacturers of the starship.
	 */
	manufacturers: string[];

	/**
	 * The cost of this starship new, in galactic credits.
	 */
	costInCredits: string;

	/**
	 * The length of this starship in meters.
	 */
	length: string;

	/**
	 * The number of personnel needed to run or pilot this starship.
	 */
	crew: string;

	/**
	 * The number of non-essential people this starship can transport.
	 */
	passengers: string;

	/**
	 * The maximum speed of this starship in the atmosphere. "N/A" if this
	 * starship is incapable of atmospheric flight.
	 */
	maxAtomispheringSpeed: string;

	/**
	 * The class of this starships hyperdrive.
	 */
	hyperdriveRating: string;

	/**
	 * The Maximum number of Megalights this starship can travel in a standard
	 * hour. A "Megalight" is a standard unit of distance and has never been
	 * defined before within the Star Wars universe. This figure is only really
	 * useful for measuring the difference in speed of starships. We can assume
	 * it is similar to AU, the distance between our Sun (Sol) and Earth.
	 */
	MGLT: string;

	/**
	 * The maximum number of kilograms that this starship can transport.
	 */
	cargoCapacity: string;

	/**
	 * The maximum length of time that this starship can provide consumables
	 * for its entire crew without having to resupply.
	 */
	consumables: string;

	/**
	 * The date and time this resource was created.
	 */
	createdAt: string;

	/**
	 * The date and time this resource was last updated.
	 */
	updatedAt: string;
};
