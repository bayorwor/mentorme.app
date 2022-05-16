import { Row, Col } from "antd";
import React from "react";
import ServicesCard from "../components/services/ServicesCard";

const Services = () => {
  return (
    <div>
      <h1 className="title">Services</h1>
      <h4 className="p-3">
        Do not discourage yourself with what you haven't done, encourage yourself with what you will do.
        <br />
        Developing this relationship can help both of you learn new things,
        build your networks and grow as professionals. Understanding these
        <br />
        benefits can help you decide whether to find a mentor or become one.
      </h4>

      <Row gutter={16}>
        <Col data-aos="flip-right" className="gutter-row" span={8}>
          <ServicesCard
            title={"Skills Development"}
            description={
              "One of the most common reasons that employees look for mentorships is to develop specific skills. For employees who are new to the company, this is the best way to become better at their job. \n For example, if the mentee works in sales, a mentor could help them work on their cold calling skills. However, this goal can also work in a reverse mentorship where the roles are switched.\n The more experienced employee takes on the mentee’s role and is taught something by the more junior employee.\n This dynamic helps the mentor develop new skills in a relationship where the mentee has the knowledge. Most often, these reverse mentorships are connected to developing technology skills and capabilities. "
            }
          />
        </Col>
        <Col data-aos="flip-right" className="gutter-row" span={8}>
          <ServicesCard
            title={"Career planning"}
            description={`
          Mentorships are valuable tools for helping mentees create a long-term plan and strategy for their career. In these situations, the mentor is an advisor who can point their mentee in the right direction and help them with their career planning.\n
          Careers aren’t as linear as they once were. It’s more common for employees to have upwards of seven career changes throughout their lives.\n
          As our careers follow more twists and turns, employees are embracing what is called a squiggly career. A squiggly career is a career that isn't defined by climbing the corporate ladder but is fluid and can take many different paths.\n
          Because our career paths will likely be complex, it’s an important goal to clarify what our career goals are. By building a relationship with a mentor, you can learn from their own experience and use what they’ve learned to inform your own choices for your career.
          `}
          />
        </Col>
        <Col data-aos="zoom-in" className="gutter-row" span={8}>
          <ServicesCard
            title={"Networking"}
            description={`
            Mentorships are a great way for younger employees to expand their network of contacts. Their mentors are likely individuals who work in the same industry and can help connect their mentees with influential people in their network. This can open up opportunities that would be harder to come by otherwise.
Growing your network is a good goal to have in the long term, but it shouldn’t be the only goal. A mentor can feel used if they feel their only purpose is to expand your network.
Instead, consider this goal after having already built a relationship with them and learned valuable lessons from their experience. 
            `}
          />
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col data-aos="fade-right" className="gutter-row" span={8}>
          <ServicesCard
            title={"Lifestyle & Wellbeing"}
            description={` One way to attract potential clients is to harness the power of social media. As an example, you may want to create a Facebook profile for your business, which you can use to regularly post motivational content. Such as inspirational quotes and tips to live a healthy, happy, successful life. Make sure to link your readers directly to your professional website, in each of your social media posts.`}
          />
        </Col>
        <Col data-aos="zoom-out" className="gutter-row" span={8}>
          <ServicesCard
            title={"Business Development"}
            description={`
            Business development is a critical part of the business process. It’s the process of creating a business plan, establishing a business structure, and developing a business plan.\n
            The key here is “growth opportunities.” In most situations, “new opportunities” means more than “new clients.” It also includes: Getting new partners Entering new markets Developing new products But how is this different from marketing anyway? At first glance there seems to be a lot of overlap between business development and marketing, but there are some key differences.
            `}
          />
        </Col>
        <Col data-aos="fade-down" className="gutter-row" span={8}>
          <ServicesCard
            title={"Problem Solving"}
            description={`
            Problem solving is a critical skill for any developer. It is the ability to identify and solve problems. It is the ability to understand the problem and the solution, and to apply the solution to the problem.
            ‍A mentor can coach you through problems you’re facing right now or act as an advisor to help you learn problem-solving skills. Bring a problem to your mentor. One that you’d like help navigating. 

For example, here are some problems or situations you can bring to your mentor to talk through:

“I tried to delegate a task last week, and it did not go as well as I’d expected. Can you help me think through what to do differently next time?”
“I have these two very different career path options and would like your help making a decision.”
“I have a performance review coming up with my manager. Could you help me prepare?”
By asking your mentor these questions, you can talk through them together and determine how best to address them. `}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
