import type { Meta, StoryObj } from "@storybook/react";
import BlogList from "./BlogList";

const meta: Meta<typeof BlogList> = {
  title: "Table/BlogList",
  component: BlogList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BlogList>;

export const Default: Story = {
  args: {
    blogList: [
      {
        userId: 1,
        id: 1,
        title: "title1",
        body: "body1",
      },
      {
        userId: 2,
        id: 2,
        title: "title2",
        body: "body2",
      },
    ],
    userList: [
      {
        id: 1,
        name: "user1",
        username: "username1",
        email: "email1",
        address: {
          street: "street1",
          suite: "suite1",
          city: "city1",
          zipcode: "zipcode1",
          geo: {
            lat: "lat1",
            lng: "lng1",
          },
        },
        phone: "phone1",
        website: "website1",
        company: {
          name: "name1",
          catchPhrase: "catchPhrase1",
          bs: "bs1",
        },
      },
      {
        id: 2,
        name: "user2",
        username: "username2",
        email: "email2",
        address: {
          street: "street2",
          suite: "suite2",
          city: "city2",
          zipcode: "zipcode2",
          geo: {
            lat: "lat2",
            lng: "lng2",
          },
        },
        phone: "phone2",
        website: "website2",
        company: {
          name: "name2",
          catchPhrase: "catchPhrase2",
          bs: "bs2",
        },
      },
    ],
  },
};
