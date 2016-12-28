import {formatTime} from "./formatHelpers";

const dateString = "2016-10-31T18:34:08Z";

it('formats a date string to something readable', () => {
  const formattedTimeAgo = formatTime(dateString);
  expect(formattedTimeAgo).toBe("2 months ago");
});


