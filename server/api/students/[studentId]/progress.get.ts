import { z } from 'zod';
import { useNest } from '~/composables/use-nest';
import { skillWithChildrenSchema } from '~/schemas/Skill';

const splashZoneSchema = z.object({
  id: z.number(),
  name: z.string(),
  levelId: z.number(),
  distance: z.number(),
  incrementBy: z.number(),
  completed: z.boolean(),
  progress: z.number(),
});

const progressResponseSchema = z.object({
  level: z.object({
    id: z.number(),
    curriculumId: z.coerce.number(),
    curriculum: z.object({
      id: z.number(),
      name: z.string(),
      description: z.string(),
    }),
    name: z.string(),
    abbreviation: z.string(),
    color: z.string(),
  }),
  splashZones: z.array(splashZoneSchema),
  skills: z.array(skillWithChildrenSchema),
});

export type ProgressResponse = z.infer<typeof progressResponseSchema>;

export default defineEventHandler<ProgressResponse>(event => {
  const { studentId } = event.context.params;

  return useNest(event, `/v2/level/students/${studentId}/progress`, {
    onResponse({ response }) {
      response._data = progressResponseSchema.parse(response._data);
    },
  });
});

// {
//   "level": {
//     "id": 6,
//     "curriculumId": 2,
//     "curriculum": {
//       "id": 2,
//       "name": "Bright Blue",
//       "description": "BR"
//     },
//     "name": "Bright Blue 2",
//     "abbreviation": "BR2",
//     "color": "FFCF34"
//   },
//   "splashZones": [
//     {
//       "id": 3,
//       "name": "1",
//       "levelId": 5,
//       "distance": 6,
//       "incrementBy": 2,
//       "completed": false,
//       "progress": 0
//     },
//     {
//       "id": 4,
//       "name": "2",
//       "levelId": 6,
//       "distance": 30,
//       "incrementBy": 15,
//       "completed": false,
//       "progress": 0
//     },
//     {
//       "id": 5,
//       "name": "3",
//       "levelId": 7,
//       "distance": 60,
//       "incrementBy": 20,
//       "completed": false,
//       "progress": 0
//     }
//   ],
//   "skills": [
//     {
//       "progress": 1,
//       "completed": true,
//       "feedback": {},
//       "children": [
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1067,
//           "name": "Face/ears fully submerged",
//           "description": "Swimmer's face and ears completely submerged in the water ",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1068,
//           "name": "3 seconds of bubbles",
//           "description": "Swimmer blows out bubbles underwater completely for 3 seconds",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1069,
//           "name": "1 second breath",
//           "description": "Swimmer takes a sneaky one-second breath",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1070,
//           "name": "3 seconds of bubbles",
//           "description": "Swimmer puts their face back in the water for 3 seconds and continues this process",
//           "distance": null,
//           "displayable": false
//         }
//       ],
//       "id": 464,
//       "name": "Rhythmic Breathing",
//       "description": "After learning breath control, we want to introduce breath exchange along with rhythmic breathing. Swimmers should breathe in a pattern of 3 seconds of bubbles out and 1 second of air in and repeat.",
//       "displayable": false,
//       "videoUrl": "https://stream.mux.com/nVxFA8eQWw2drp6KLCgajEC1owkVxGSYY00YG9ZCAVzU.m3u8"
//     },
//     {
//       "progress": 0,
//       "completed": false,
//       "feedback": {
//         "createdAt": "2021-04-29T21:54:57.000Z",
//         "skillId": 470,
//         "createdById": 208,
//         "longFeedback": "Tip for practicing at home! We want kicks to be fast with small splashes, not slow with big splashes. Practice \"fast feet\" with your swimmer on the edge of their bed at home. ",
//         "createdBy": {
//           "id": 203,
//           "fullName": "Casey Morford",
//           "partialFullName": "Casey M.",
//           "firstName": "Casey",
//           "lastName": "Morford"
//         }
//       },
//       "children": [
//         {
//           "completed": false,
//           "feedback": {},
//           "id": 1071,
//           "name": "Small, fast kicks",
//           "description": "Swimmer's legs are straight; toes pointed; small fast kicks and splashes",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": false,
//           "feedback": {},
//           "id": 1072,
//           "name": "Face down, ears under",
//           "description": "Swimmer's face is down with ears submerged",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": false,
//           "feedback": {},
//           "id": 1073,
//           "name": "Exhale underwater",
//           "description": "Swimmer is performing 3-1-3 rhytmic breathing",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": false,
//           "feedback": {},
//           "id": 1074,
//           "name": "Straight arms",
//           "description": "Swimmer's arms are straight",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": false,
//           "feedback": {},
//           "id": 1247,
//           "name": "15 ft kicking w/ teaching tools",
//           "description": "Swimmer performs 15 feet of Beginner Straight-leg Kicking without Teaching Tools",
//           "distance": 15,
//           "displayable": false
//         }
//       ],
//       "id": 470,
//       "name": "15 Feet of Beginner Straight-leg Kicking with Teaching Tools",
//       "description": "This skill builds endurance while also teaching your child how to stay horizontal on top of the water. ",
//       "displayable": false,
//       "videoUrl": "https://stream.mux.com/N7HjvAPERi7TFQxWce00Q3XqQo5Fl1MBXblXa5seNVLo.m3u8"
//     },
//     {
//       "progress": 1,
//       "completed": true,
//       "feedback": {},
//       "children": [
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1075,
//           "name": "Small, fast kicks",
//           "description": "Swimmer's legs straight, toes pointed, small fast kicks and splashes",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1076,
//           "name": "Face down, ears under",
//           "description": "Swimmer's face is down with ears submerged",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1077,
//           "name": "Exhale underwater",
//           "description": "Swimmer is performing 3-1-3 rhytmic breathing",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1078,
//           "name": "Straight arms, no teaching tools",
//           "description": "Swimmer's arms are straight and is not wearing teaching tools",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1269,
//           "name": "15 ft kicking, no teaching tools",
//           "description": "Swimmer performs 15 feet of Beginner Straight-leg Kicking without Teaching Tools",
//           "distance": 15,
//           "displayable": false
//         }
//       ],
//       "id": 478,
//       "name": "15 Feet of Beginner Straight-leg Kicking",
//       "description": "This skill builds endurance while also teaching your child how to stay horizontal on top of the water without teaching tools.",
//       "displayable": false,
//       "videoUrl": "https://stream.mux.com/JB92mSg6zDQiX3p8URJ4KysAYgm3t6yYE1d3Hs1dEI00.m3u8"
//     },
//     {
//       "progress": 0.6666666666666666,
//       "completed": false,
//       "feedback": {},
//       "children": [
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1079,
//           "name": "Swim back, backpack on",
//           "description": "Swimmer is able to swim from the middle of the lane back to the wall with a backpack on",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": false,
//           "feedback": {},
//           "id": 1080,
//           "name": "Swim back, grab ledge",
//           "description": "Swimmer is able to swim from the middle of the lane back to the wall with a backpack on and grab the top edge",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1081,
//           "name": "Swim back, no tools",
//           "description": "Swimmer is able to swim from the middle of the lane back to the wall, without teaching tools and grabs the top edge",
//           "distance": null,
//           "displayable": false
//         }
//       ],
//       "id": 604,
//       "name": "Beginner Safety Swim",
//       "description": "This skill teaches your swimmer to safely get back to the side of the pool from the middle of the lane unassisted.",
//       "displayable": false,
//       "videoUrl": "https://stream.mux.com/OInNXe7ThLDIUf3wEinmtlr7gCRYckaRqaTDRamuqbk.m3u8"
//     },
//     {
//       "progress": 0.8,
//       "completed": false,
//       "feedback": {},
//       "children": [
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1082,
//           "name": "Small, fast kicks",
//           "description": "Swimmer's legs are straight; toes pointed; small fast kicks and splashes",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1083,
//           "name": "Face down, ears under",
//           "description": "Swimmer's face is down with ears submerged",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1084,
//           "name": "Exhale underwater",
//           "description": "Swimmer is performing 3-1-3 rhytmic breathing",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": true,
//           "feedback": {},
//           "id": 1085,
//           "name": "Straight arms, no teaching tools",
//           "description": "Swimmer's arms are straight and is not wearing teaching tools with quick breaths and continued laps",
//           "distance": null,
//           "displayable": false
//         },
//         {
//           "completed": false,
//           "feedback": {},
//           "id": 1248,
//           "name": "30 ft kicking, no teaching tools",
//           "description": "Swimmer performs 30' of straight-leg kicking",
//           "distance": 30,
//           "displayable": false
//         }
//       ],
//       "id": 486,
//       "name": "30 Feet of Beginner Straight-leg Kicking",
//       "description": "This step challenges your child to independently swim 30 feet with rhythmic breathing.",
//       "displayable": true,
//       "videoUrl": "https://stream.mux.com/nAn9elH3hC4HRjZPUAPgJW6hN5tJ4Ek004TQqLUKzKYQ.m3u8"
//     }
//   ]
// }
