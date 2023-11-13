import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://backend-project-nc-news-49l4.onrender.com/api",
});

export const getArticles = (topic, selectedSortBy, selectedOrder) => {
  let path = "/articles";
  return newsAPI
    .get(path, {
      params: {
        topic: topic,
        sort_by: selectedSortBy,
        order: selectedOrder,
      },
    })
    .then((res) => {
      const articles = res.data.articles;
      return articles;
    });
};

export const getArticleById = (article_id) => {
  console.log('Fetching article with ID:', article_id);

  return newsAPI.get(`/articles/${article_id}`).then((res) => {
    const article = res.data.article;
    return article;
  });
};

export const getArticleComments = (article_id) => {
  console.log("getting comments for article id:" + article_id)
  return newsAPI.get(`/articles/${article_id}/comments`).then((res) => {
    const comments = res.data.comments;
    return comments;
  });
};

export const voteOnArticle = (article_id, body) => {
  return newsAPI.patch(`/articles/${article_id}`, body).then((res) => {
    const response = res.data.updatedArticle;
    return response;
  });
};

export const postComment = (article_id, finalisedComment, loggedInUser) => {
  const commentObject = {
    username: loggedInUser,
    body: finalisedComment,
  };
  return newsAPI
    .post(`/articles/${article_id}/comments`, commentObject)
    .then((res) => {
      const commentInserted = res.data.commentInserted;
      return commentInserted;
    });
};

export const deleteComment = (comment_id) => {
  return newsAPI.delete(`/comments/${comment_id}`).then((res) => {
    // const commentInserted = res.data.commentInserted;
    // return commentInserted;
  });
};

export const getAllUsers = () => {

  return newsAPI.get(`/users`).then((res) => {
    const allUsers = res.data.allUsers;
    return allUsers;
  });
};


export const postArticle = (
  loggedInUser,
  title,
  body,
  topic,
  article_img_url
) => {
  const articleObject = {
    author: loggedInUser,
    title: title,
    body: body,
    topic: topic,
    article_img_url: article_img_url,
  };

  return newsAPI.post(`/articles/`, articleObject).then((res) => {
    const postedArticle = res.data.postedArticle;
    return postedArticle;
  });
};

export const getAllTopics = () => {
  return newsAPI.get(`/topics`).then((res) => {
    const allTopics = res.data.allTopics;
    return allTopics;
  });
};

export const deleteArticle = (article_id) => {
  return newsAPI.delete(`/articles/${article_id}`);
};


export const postTopic = (slug, description) => {
  const topicObject = {
    slug: slug,
    description: description,
  };
  return newsAPI
    .post(`/topics`, topicObject)
    .then((res) => {
      const topicInserted = res.data.topicInserted;
      return topicInserted;
    });
};