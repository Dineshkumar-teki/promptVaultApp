"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

// view different views
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const regex = new RegExp(e.target.value, "i");
    const fPosts = posts.filter((post) => {
      return (
        regex.test(post.prompt) ||
        regex.test(post.creator.username) ||
        regex.test(post.tag)
      );
    });
    setFilteredPosts(fPosts);
  };

  const handleSearchChange1 = (tag) => {
    setSearchText(tag);
    const regex = new RegExp(tag, "i");
    const fPosts = posts.filter((post) => {
      return (
        regex.test(post.prompt) ||
        regex.test(post.creator.username) ||
        regex.test(post.tag)
      );
    });
    setFilteredPosts(fPosts);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a username or a tag"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={filteredPosts}
        handleTagClick={(tag) => {
          handleSearchChange1(tag);
        }}
      />
    </section>
  );
};

export default Feed;
