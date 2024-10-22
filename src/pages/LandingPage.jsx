import Foto from "../assets/ridhoa.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import javaScript from "../assets/javacript.png";
import typeScript from "../assets/typeScript.png";
import react from "../assets/react.svg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import vite from "../assets/vite.svg";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import nextjs from "../assets/nextjs.png";
import reactNative from "../assets/rNative.png";
import apolloClient from "../assets/apolloC.png";
import express from "../assets/expressJs.png";
import sequelize from "../assets/sequelize.png";
import postgre from "../assets/postgreSQL.png";
import restApi from "../assets/restAPI.png";
import mongoDB from "../assets/mongoDB.png";
import apolloGraphql from "../assets/apolloC.png";
import redis from "../assets/redis.png";
import reduxLogo from "../assets/redux.png";
import nodeJS from "../assets/nodeJS.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import contohPorto from "../assets/contohPorto.png";

// Express, Sequelize, PostgreSQL, Rest API, MongoDB, Apollo GraphQL, Redis

export default function LandingPage() {
  const CVRidho = "./cvMRidhoA.pdf";
  return (
    <div className="flex flex-col bg-indigo-900">
      {/* Awal Home */}
      <div className="flex mx-16 mb-[130px]">
        <div className="flex-1 flex flex-col">
          <div className="mt-32 text-yellow-400 font-normal text-xl font-righteous">
            Hi, my name is
          </div>
          <div className="text-white font-bold font-righteous text-5xl my-5">
            Muhammad Ridho Amrullah
          </div>
          <div className="text-yellow-400 font-normal font-righteous text-4xl mb-3">
            Full-Stack Developer
          </div>
          <div className="text-white font-normal text-xl">
            I have a Bachelor's degree majored in Computer Engineering.
            Currently I am focused on learning JavaScript Full Stack Web
            Development. I loved to build products that can be used by millions
            of people. And iam open for{" "}
            <text className="text-yellow-500 font-bold">
              Work & Collaboration.
            </text>
            <div className="mt-4 flex gap-3">
              <div>Download my CV : </div>{" "}
              <div>
                <a href={CVRidho} download="cvMRidhoa.pdf">
                  <FaDownload className="hover:text-green-500" size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-10 flex items-center justify-center ">
          <img src={Foto} alt="Foto ridho" className="max-w-full h-auto" />
        </div>
      </div>
      {/* Akhir Home */}

      {/* Awal Tech Stack */}
      <div className="flex-1 bg-indigo-900 flex-col ">
        <div className="text-center font-bold font-righteous text-5xl text-white mt-10">
          Skills
        </div>
        {/* Awal Language */}
        <div className="mt-5  ml-12 flex flex-col">
          <div className="font-righteous text-yellow-400 text-2xl">
            Language
          </div>
          <div className="flex space-x-2 mt-1 ">
            <div className="flex flex-col items-center">
              <img src={javaScript} alt="Javascript" className="w-20 h-20" />
              <label className="text-white">JavaScript</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={typeScript}
                alt="Typescript"
                className="w-auto h-[75px] mb-1"
              />
              <label className="text-white">TypeScript</label>
            </div>
          </div>
        </div>
        {/* Akhir Language */}

        {/* Awal Frontend */}
        <div className="mt-5 ml-12 flex flex-col">
          <div className="font-righteous text-yellow-400 text-2xl">
            Frontend
          </div>
          <div className="flex space-x-10 mt-1 flex-wrap">
            <div className="flex flex-col items-center">
              <img src={react} alt="React" className="w-[80px] h-full" />
              <label className="text-white">React</label>
            </div>
            <div className="flex flex-col items-center">
              <img src={html} alt="HTML" className="w-[68px] h-[80px]" />
              <label className="text-white mt-1">HTML</label>
            </div>
            <div className="flex flex-col items-center">
              <img src={css} alt="css" className="w-[83px] h-auto" />
              <label className="text-white">CSS</label>
            </div>
            <div className="flex flex-col items-center">
              <img src={vite} alt="Vite" className="w-[80px] h-[83px]" />
              <label className="text-white">Vite</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={tailwind}
                alt="Tailwind"
                className="w-[90px] h-[83px]"
              />
              <label className="text-white">Tailwind CSS</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={bootstrap}
                alt="Bootstrap"
                className="w-[82px] h-[82px]"
              />
              <label className="text-white">Bootstrap</label>
            </div>
            <div className="flex flex-col items-center">
              <img src={nextjs} alt="nextJS" className="w-[130px] h-[83px]" />
              <label className="text-white">NextJS</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={reactNative}
                alt="React Native"
                className="w-[100px] h-[83px]"
              />
              <label className="text-white">React Native</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={apolloClient}
                alt="Apollo Client"
                className="w-[80px] h-[82px]"
              />
              <label className="text-white">Apollo Client</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={reduxLogo}
                alt="Apollo Client"
                className="w-[80px] h-[82px]"
              />
              <label className="text-white">Redux</label>
            </div>
          </div>
        </div>
        {/* Akhir Frontend */}

        {/* Awal Backend */}
        <div className="mt-5 ml-12 flex flex-col">
          <div className="text-yellow-400 font-righteous text-2xl">Backend</div>
          <div className="flex space-x-10 mt-1 flex-wrap">
            <div className="flex flex-col items-center">
              <img src={express} alt="Express" className="w-[100px] h-[80px]" />
              <label className="text-white">Express</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={sequelize}
                alt="Sequelize"
                className="w-[80px] h-[80px]"
              />
              <label className="text-white">Sequelize</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={postgre}
                alt="PostgreSQL"
                className="w-[80px] h-[80px]"
              />
              <label className="text-white">PostgreSQL</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={restApi}
                alt="Rest Api"
                className="w-[140px] h-[80px]"
              />
              <label className="text-white">Rest API</label>
            </div>
            <div className="flex flex-col items-center">
              <img src={mongoDB} alt="MongoDB" className="w-[80px] h-[80px]" />
              <label className="text-white">MongoDB</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={apolloGraphql}
                alt="Apollo GraphQL"
                className="w-[80px] h-[80px]"
              />
              <label className="text-white">Apollo GraphQL</label>
            </div>
            <div className="flex flex-col items-center">
              <img src={redis} alt="Redis" className="w-[80px] h-[80px]" />
              <label className="text-white">Redis</label>
            </div>
          </div>
        </div>
        {/* Akhir Backend */}

        {/* Awal Runtime Environment */}
        <div className="mt-5 ml-12 flex flex-col">
          <div className="text-yellow-400 font-righteous text-2xl">
            Runtime Environment
          </div>
          <div className="flex space-x-10 mt-1 flex-wrap">
            <div className="flex flex-col items-center">
              <img src={nodeJS} alt="NodeJS" className="w-[120px] h-[80px]" />
              <label className="text-white">NodeJS</label>
            </div>
          </div>
        </div>
        {/* Akhir Runtime Environment */}

        {/* Awal Environment */}
        <div className="mt-5 ml-12 flex flex-col">
          <div className="text-yellow-400 font-righteous text-2xl">
            Environment
          </div>
          <div className="flex space-x-10 mt-1 flex-wrap">
            <div className="flex flex-col items-center">
              <img src={github} alt="Github" className="w-[90px] h-[80px]" />
              <label className="text-white">Github</label>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={vscode}
                alt="Visual Studio Code"
                className="w-[80px] h-[80px]"
              />
              <label className="text-white">Visual Studio Code</label>
            </div>
          </div>
        </div>
        {/* Akhir Environment */}
      </div>
      {/* Akhir Tech Stack */}

      {/* Awal Portofolio */}
      <div className="flex-1  flex flex-col mt-5">
        <div>
          <section
            id="portofolio"
            className="font-bold font-righteous text-5xl text-white text-center mb-5"
          >
            Portofolio
          </section>
        </div>
        {/* Awal List Portofolio */}
        <div className="space-y-20">
          {/* Awal Porto 1 */}
          <div className=" mx-12 flex">
            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}

            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-right mr-5">
                01. Restaurant Server
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                This server-side API provides functionalities for managing
                users, cuisines, and categories. This API supports role-based
                access where users can perform CRUD operations on cuisines and
                categories. Public endpoints are available for viewing cuisines,
                while authenticated users can manage cuisine and category data.{" "}
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>ExpressJS</div>
                  <div>Sequelize</div>
                  <div>PostgreSQL</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/restaurant-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/restaurant-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}
          </div>
          {/* Akhir Porto 1 */}

          {/* Awal Porto 2 */}
          <div className=" mx-12 flex">
            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-left ml-5">
                02. Grocery Server
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                The Grocery API provides functionalities for user authentication
                and grocery management. This API enforces both authentication
                and authorization. Users must be authenticated to manage
                groceries, and only the user who owns the grocery (based on the
                UserId) can update or delete it.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>ExpressJS</div>
                  <div>Sequelize</div>
                  <div>PostgreSQL</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/grocery-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/grocery-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}

            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}
          </div>
          {/* Akhir Porto 2 */}

          {/* Awal Porto 3 */}
          <div className=" mx-12 flex">
            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}

            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-right mr-5">
                03. Heroes Server
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                The API manages a user and hero system with three main models:
                User (requiring a unique email and password), Hero (with fields
                for name, image URL, and type URL), and MyHero (establishing a
                many-to-many relationship with UserId, HeroId, a match score,
                and status). It offers endpoints for registration, login, and
                managing heroes, with some routes needing authentication and
                authorization.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>ExpressJS</div>
                  <div>Sequelize</div>
                  <div>PostgreSQL</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/heroes-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/heroes-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}
          </div>
          {/* Akhir Porto 3 */}

          {/* Awal Porto 4 */}
          <div className=" mx-12 flex">
            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-left ml-5">
                04. Restaurant Client
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                The frontend connects with the API to manage cuisines and user
                authentication, providing a user-friendly interface. It allows
                users to register and log in, view a list of cuisines, and
                manage them through adding, editing, and uploading images. This
                ensures a seamless experience in handling culinary preferences.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>React</div>
                  <div>Vite</div>
                  <div>Tailwind CSS</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/restaurant-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/restaurant-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}

            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}
          </div>
          {/* Akhir Porto 4 */}

          {/* Awal Porto 5 */}
          <div className=" mx-12 flex">
            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}

            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-right mr-5">
                05. Grocery Client
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                The Grocery frontend allows users to manage their grocery lists
                effectively. Users can register and log in to access their
                accounts. Once logged in, they can view their entire grocery
                list, add new items, and delete groceries as needed, providing a
                seamless experience for organizing their grocery needs.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>React</div>
                  <div>Vite</div>
                  <div>Tailwind CSS</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/grocery-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/grocery-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}
          </div>
          {/* Akhir Porto 5 */}

          {/* Awal Porto 6 */}
          <div className=" mx-12 flex">
            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-left ml-5">
                06. Coin Client
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                Crypto is a client-side application designed for managing a
                user's cryptocurrency portfolio. Users can register and log in
                to view their coins and access features such as viewing all coin
                data and their owned coins (MyCoin). The app allows users to
                add, delete, and update the quantity of coins in their portfolio
                effectively.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>React</div>
                  <div>Vite</div>
                  <div>Tailwind CSS</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/coin-client/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/coin-client/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}

            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}
          </div>
          {/* Akhir Porto 6 */}

          {/* Awal Porto 7 */}
          <div className=" mx-12 flex">
            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}

            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-right mr-5">
                07. Fullstack Web Valotime
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                The Valotime API is a full-stack application integrating a user
                system with third-party APIs like Midtrans for payments. Users
                can register, authenticate, and manage posts with tags and
                images. Authenticated routes provide access to game data and
                payment token generation, enhancing the app's functionality
                while ensuring secure transactions.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>React</div>
                  <div>Vite</div>
                  <div>Tailwind CSS</div>
                  <div>ExpressJS</div>
                  <div>Sequelize</div>
                  <div>PostgreSQL</div>
                  <div>Redux</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/fullstack-valotime"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/fullstack-valotime"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}
          </div>
          {/* Akhir Porto 7 */}

          {/* Awal Porto 8 */}
          <div className=" mx-12 flex">
            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-left ml-5">
                08. Fullstack for Course
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                The application is a full-stack JavaScript solution using
                Node.js, Express.js, PostgreSQL, Sequelize, and React.js to
                display courses. Users can register and log in to view the
                course list, enroll in courses, and mark completed courses. This
                system enhances the learning experience by tracking user
                progress and course completion.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>React</div>
                  <div>Vite</div>
                  <div>Tailwind CSS</div>
                  <div>ExpressJS</div>
                  <div>Sequelize</div>
                  <div>PostgreSQL</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/fullstack-course"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/fullstack-course"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}

            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}
          </div>
          {/* Akhir Porto 8 */}

          {/* Awal Porto 9 */}
          <div className=" mx-12 flex">
            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}

            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-right mr-5">
                09. Clone Instagram - React Native
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                The Instagram clone app built with React Native and Expo
                effectively replicates the original platform's user experience.
                It includes user authentication, dynamic feed posts, and
                features for uploading and editing photos. This cross-platform
                solution provides a seamless experience for both iOS and Android
                users, showcasing modern mobile development.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>React Native</div>
                  <div>Expo</div>
                  <div>Tailwind CSS</div>
                  <div>Apollo Client</div>
                  <div>Apollo GraphQL</div>
                  <div>MongoDB</div>
                  <div>Redis</div>
                  <div>Context API</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/mobile-clone-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/mobile-clone-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}
          </div>
          {/* Akhir Porto 9 */}

          {/* Awal Porto 10 */}
          <div className=" mx-12 flex">
            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-left ml-5">
                10. Fullstack NextJS eCommerce
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                My eCommerce app is a web application built with TypeScript,
                Next.js, and MongoDB. It offers a seamless shopping experience,
                allowing users to browse and purchase products efficiently.
                TypeScript enhances code quality, while Next.js enables optimal
                server-side rendering and routing for better performance.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>TypeScript</div>
                  <div>React</div>
                  <div>NextJS</div>
                  <div>Tailwind CSS</div>
                  <div>MongoDB</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/ecommerce-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/ecommerce-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}

            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}
          </div>
          {/* Akhir Porto 10 */}

          {/* Awal Porto 11 */}
          <div className=" mx-12 flex">
            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}

            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-right mr-5">
                11. Task Management App
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                The Task Management app built with React lets users manage tasks
                in backend, frontend, and mobile categories. Using json-server
                for data handling, users can view tasks by category. Developed
                with TypeScript and Next.js, it ensures type safety and
                efficient server-side rendering while employing reusable
                components for maintainability
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>TypeScript</div>
                  <div>React</div>
                  <div>NextJS</div>
                  <div>Tailwind CSS</div>
                  <div>MongoDB</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/task-management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/task-management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}
          </div>
          {/* Akhir Porto 11 */}

          {/* Awal Porto 12 */}
          <div className=" mx-12 flex">
            {/* Awal Deskripsi */}
            <div className="flex-1 bg  flex flex-col">
              <div className="text-white text-4xl font-bold font-righteous text-left ml-5">
                12. Fullstack NextJS Pokemon
              </div>
              <div className="text-white bg-green-700 mx-5 p-5 mt-3 rounded-lg">
                The Pokedex app built with Next.js allows users to display
                various Pokémon and add new ones to their list. Utilizing
                TypeScript, the application ensures type safety, while reusable
                components enhance maintainability. This setup provides a
                user-friendly experience for Pokémon enthusiasts to manage their
                collections effectively.
              </div>
              <div className="flex mx-5 mt-1">
                <div className="font-medium font-righteous text-lg text-white">
                  Tech Stack:
                </div>
                <div className="flex ml-2 text-lg space-x-2 text-white font-normal font-mono  ">
                  <div>TypeScript</div>
                  <div>React</div>
                  <div>NextJS</div>
                  <div>Tailwind CSS</div>
                  <div>MongoDB</div>
                </div>
              </div>
              <div className="flex mx-5 space-x-3 mt-1">
                <Link
                  to="https://github.com/muhammadridhoamrullah/pokemon-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaGithub className="text-white" size={50} />
                  </div>
                </Link>
                <Link
                  to="https://github.com/muhammadridhoamrullah/pokemon-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaLaptopCode className="text-white" size={50} />
                  </div>
                </Link>
              </div>
            </div>
            {/* Akhir Deskripsi */}

            {/* Awal Foto */}
            <div className="flex-1 bg-red-600 rounded-lg h-72">
              <img
                src={contohPorto}
                alt="Portofolio 1"
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* Akhir Foto */}
          </div>
          {/* Akhir Porto 12 */}

          {/* Akhir List Portofolio */}
        </div>
        {/* Akhir Portofolio */}
      </div>
      {/* Awal Contact */}
      <div className="flex-1 bg-indigo-900 h-screen flex flex-col  ">
        <section id="contact">
          <div className="font-bold text-white text-5xl font-righteous text-center mt-10  ">
            Contact
          </div>
          <div className="flex items-center justify-center space-x-10 mt-10 mb-16 ">
            <Link
              to="https://www.instagram.com/ridhoamrullah_/?hl=id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white" size={50} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/muhammad-ridho-amrullah-1456b2171/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white" size={50} />
            </Link>
            <Link
              to="https://github.com/muhammadridhoamrullah"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="text-white" size={50} />
            </Link>
            <Link
              to="https://t.me/Ridhoamrullah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="text-white" size={50} />
            </Link>
          </div>
        </section>
      </div>
      {/* Akhir Contact */}
    </div>
  );
}
