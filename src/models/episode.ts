/**
 * Describes a Episode exposed via the API.
 */
export type EpisodeDto = {
	/**
	 * The unique identifier of the episode.
	 */
	id: string;

	/**
	 * The title of the episode.
	 */
	title: string;

	/**
	 * The episode number to represent the order in which
	 * this episode was released with the other episodes.
	 */
	releaseOrder: number;

	/**
	 * A signature device of the opening sequences of every
	 * numbered film of the Star Wars series
	 */
	openingCrawl: string;

	/**
	 * The director of the episode.
	 */
	director: string;

	/**
	 * The producer of the episode.
	 */
	producer: string;

	/**
	 * The data the episode was released.
	 */
	releaseDate: string;

	/**
	 * The date and time this resource was created.
	 */
	createdAt: string;

	/**
	 * The date and time this resource was last updated.
	 */
	updatedAt: string;
};
