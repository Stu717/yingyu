// js/data.js
const sections = [
  {
    id: 1,
    title: "介绍自己",
    cards: [
      {
        id: "s1-c1",
        front: "你是活动组织者，请回忆自我介绍句式。",
        back: "I am Li Ming, a student from ____ and one of the organizers of this activity.",
        example: "I am Li Ming, a student from the School of Foreign Languages and one of the organizers of this activity."
      }
    ]
  },
  {
    id: 2,
    title: "写信目的+活动信息",
    cards: [
      {
        id: "s2-c1",
        front: "请回忆：代表学生会邀请对方做讲座的句式。",
        back: "On behalf of the Student Union, I would like to invite you to deliver a lecture.",
        example: ""
      }
    ]
  },
  {
    id: 3,
    title: "活动价值",
    cards: [
      {
        id: "s3-c1",
        front: "请回忆：表达“活动为你提供好机会做某事”的句式。",
        back: "The activity will provide you with a good opportunity to ______.",
        example: "The activity will provide you with a good opportunity to exchange ideas with our students."
      }
    ]
  }
];

const phraseGroups = [
  {
    type: "学术交流类",
    activities: ["学术会议", "讲座", "论坛"],
    benefits: ["交流观点", "分享研究", "了解前沿", "结识同行"],
    phrases: [
      { id: "p-a1", en: "exchange ideas with other scholars", zh: "与其他学者交流观点" },
      { id: "p-a2", en: "share your research findings", zh: "分享研究成果" }
    ]
  }
];
