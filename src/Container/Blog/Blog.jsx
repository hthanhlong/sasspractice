import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Button, Divider } from "@material-ui/core";

const Blog = () => {
  return (
    <div className="container blog">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog__post">
            <img src="assets/img/blog/single_blog_1.png" atl="" />
            <div className="blog__content">
              <h1 className="blog__content_title">
                <Link>Google inks pact for new 35-storey office</Link>
              </h1>
              <p className="blog__content_description">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="blog__content_action">
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <PersonIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    Travel, Lifestyle
                  </div>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <QuestionAnswerIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    03 Comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__post">
            <img src="assets/img/blog/single_blog_1.png" atl="" />
            <div className="blog__content">
              <h1 className="blog__content_title">
                <Link>Google inks pact for new 35-storey office</Link>
              </h1>
              <p className="blog__content_description">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="blog__content_action">
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <PersonIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    Travel, Lifestyle
                  </div>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <QuestionAnswerIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    03 Comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__post">
            <img src="assets/img/blog/single_blog_1.png" atl="" />
            <div className="blog__content">
              <h1 className="blog__content_title">
                <Link>Google inks pact for new 35-storey office</Link>
              </h1>
              <p className="blog__content_description">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="blog__content_action">
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <PersonIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    Travel, Lifestyle
                  </div>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="blog__content_action-tag">
                  <div className="blog__content_action-tag-icon">
                    <QuestionAnswerIcon />
                  </div>
                  <div className="blog__content_action-tag-text">
                    03 Comments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right__side">
            <aside className="right__side-one">
              <div>
                <input name="name" type="text" placeholder="Search..." />
              </div>
              <Button>Search</Button>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
