const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

/* my code */

const postsContainer = document.querySelector("#posts-container");

const timeAgo = (time) => {
  const currentTime = new Date();
  const givenTime = new Date(time);
  const timeDiffMins = (currentTime - givenTime) / (1000 * 60);

  //if time passed is less than 1hr show mins
  if (timeDiffMins < 60) {
    return `${Math.floor(timeDiffMins)}m ago`;
  }

  //if time passed is less than 1day show hrs
  if (timeDiffMins / 60 < 24) {
    return `${Math.floor(timeDiffMins / 60)}h ago`;
  }

  //if time passed is more than 24hrs show days
  return `${Math.floor(timeDiffMins / (60 * 24))}d ago`;
};

const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }

  return views;
};

const forumCategory = (id) => {
  //if id is not present in allCategories, assign General
  const category = allCategories[id]?.category || "General";
  const className = allCategories[id]?.className || "general";

  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
};

const avatars = (posters, users) => {
  let avatarStr = "";

  posters.forEach(({ user_id }) => {
    //find the poster in the users list and access name & avatar
    const { name, avatar_template } = users.find(({ id }) => id === user_id);
    const avatar = avatar_template.replace(/{size}/, 30);

    avatarStr += `<img src="${avatarUrl}${avatar}" alt="${name}"/>`;
  });

  return avatarStr;
};

const showLatestPosts = ({ users, topic_list }) => {
  topic_list.topics.forEach(
    ({
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      category_id,
      bumped_at,
    }) => {
      postsContainer.innerHTML += `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)}
        </td>
        <td>
          <div class="avatar-container">
            ${avatars(posters, users)}
          </div>
        </td>
        <td>${posts_count - 1}</td>
        <td>${viewCount(views)}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>
      `;
    },
  );
};

const fetchData = async () => {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    console.log(data);

    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
