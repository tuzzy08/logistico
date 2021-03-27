// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { render } from '@testing-library/react'
import Sidebar from '../components/Sidebar'

describe('Testing SideBar Component', () => {
  it('Should render sidebar component', () => {
    const { container } = render(<Sidebar />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="css-1b6530h"
        >
          <a
            class="chakra-link css-75voep"
            href="/admin"
          >
            <svg
              class="chakra-icon css-120lxxq"
              fill="currentColor"
              focusable="false"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              />
            </svg>
            Home
          </a>
          <a
            class="chakra-link css-75voep"
            href="/admin/createPackage"
          >
            <svg
              class="chakra-icon css-120lxxq"
              fill="currentColor"
              focusable="false"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"
              />
            </svg>
            New Package
          </a>
          <a
            class="chakra-link css-75voep"
            href="/admin/bikes"
          >
            <svg
              class="chakra-icon css-120lxxq"
              fill="currentColor"
              focusable="false"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57 58.25-49.92zm116 39a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64z"
              />
            </svg>
            My Bikes
          </a>
          <a
            class="chakra-link css-75voep"
            href="/admin/vans"
          >
            <svg
              class="chakra-icon css-120lxxq"
              fill="currentColor"
              focusable="false"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M621.3 237.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7H480V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v336c0 44.2 35.8 80 80 80 26.3 0 49.4-12.9 64-32.4 14.6 19.6 37.7 32.4 64 32.4 44.2 0 80-35.8 80-80 0-5.5-.6-10.8-1.6-16h163.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H624c8.8 0 16-7.2 16-16v-85.5c0-17-6.7-33.2-18.7-45.2zM80 432c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm128 0c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm272-224h37.5c4.3 0 8.3 1.7 11.3 4.7l43.3 43.3H480v-48zm48 224c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"
              />
            </svg>
            My Vans
          </a>
        </div>
      </div>
    `)
  })
})
