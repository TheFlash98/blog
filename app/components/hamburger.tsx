import React from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const navItems = {
    "/": {
        name: "home",
    },
    "/blog": {
        name: "blog",
    },
    "/teaching": {
        name: "teaching",
    },
    "/research": {
        name: "research",
    },
    "/projects": {
        name: "projects",
    },
};

function Hamburger() {
    const items1: MenuProps["items"] = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: "0",
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: "1",
        },
        {
            type: "divider",
        },
        {
            label: "3rd menu item",
            key: "3",
        },
    ];
    const itemsNav = Object.entries(navItems).map(([path, { name }], index) => {
        return {
            label: (
                <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-1 m-1"
                >
                    {name}
                </Link>
            ),
            key: index,
        };
    });
    const items: MenuProps["items"] = itemsNav;
    return (
        <div className="block lg:hidden mx-2">
            <Dropdown menu={{ items }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <MenuOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
}

export default Hamburger;
