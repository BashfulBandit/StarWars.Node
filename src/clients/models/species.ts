/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Describes a Species.
 *
 * @public
 */
export type Species = {
	/**
	 * The name of this species.
	 */
	name: string;

	/**
	 * The classification of this species, such as "mammal" or "reptile".
	 */
	classification: string;

	/**
	 * The designation of this species, such as "sentient".
	 */
	designation: string;

	/**
	 * The average height of this species in centimeters.
	 */
	average_height: string;

	/**
	 * The average lifespan of this species in years.
	 */
	average_lifespan: string;

	/**
	 * A comma-separated string of common eye colors for this species,
	 * "none" if this species does not typically have eyes.
	 */
	eye_colors: string;

	/**
	 * A comma-separated string of common hair colors for this species,
	 * "none" if this species does not typically have hair.
	 */
	hair_colors: string;

	/**
	 * A comma-separated string of common skin colors for this species,
	 * "none" if this species does not typically have skin.
	 */
	skin_colors: string;

	/**
	 * The language commonly spoken by this species.
	 */
	language: string;

	/**
	 * The URL of a planet resource, a planet that this species originates from.
	 */
	homeworld: string;

	/**
	 * An array of People URL Resources that are a part of this species.
	 */
	people: string[];

	/**
	 * An array of Film URL Resources that this species has appeared in.
	 */
	films: string[];

	/**
	 * The hypermedia URL of this resource.
	 */
	url: string;

	/**
	 * The ISO 8601 date format of the time that this resource was created.
	 */
	created: string;

	/**
	 * The ISO 8601 date format of the time that this resource was edited.
	 */
	edited: string;
};
