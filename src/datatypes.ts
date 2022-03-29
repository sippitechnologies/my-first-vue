type Listly = {
  users: Array<Followers>;
  results: Array<Image>;
};

// Define the type User to match the JSON structure from https://list.ly/api/v4/users/1362/followers?page=1&per_page=25
type Followers = {
id: number;
name: string;
screen_name: string;

};




// Define the type User to match the JSON structure from https://list.ly/api/v4/search/image?q=soccer example
type Image = {
    media_type: string;
    media_id: number;
    url: string;
};



export { Listly, Followers, Image };