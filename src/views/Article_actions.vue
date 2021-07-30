<template>
  <main class="profile__wrapper">
    <div class="">
      <div class="profile__heading">
        <button type="submit" @click="cancelSave()" class="form__btn svg-back">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="svg-back"
          >
            <path
              id="Stroke 1"
              d="M11.2999 11.8938L20.2499 11.8938"
              stroke="#154380"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.64613 11.8998C3.64613 13.1558 10.0101 17.1708 10.7321 16.4488C11.4541 15.7268 11.5231 8.14181 10.7321 7.35081C9.94014 6.55981 3.64613 10.6448 3.64613 11.8998Z"
              stroke="#154380"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Back</span>
        </button>
        <h1 class="profile__title">{{ edited ? "Edit" : "Add" }}</h1>
      </div>

      <form class="go-bottom user_form" action="">
        <div class="form__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
            fill="#154380"
          >
            <path
              fill="#154380"
              d="M488.035,419.013l-88.647-132.217l13.511-5.173c25.952-9.937,36.084-41.253,20.959-64.501l-10.355-15.915
            c-2.72-4.179-2.72-9.581,0-13.76l10.355-15.916c15.156-23.293,4.942-54.584-20.959-64.501l-19.239-7.366
            c-3.742-1.432-6.292-4.943-6.497-8.944l-1.06-20.575c-1.432-27.748-28.089-47.068-54.869-39.863l-19.895,5.348
            c-3.866,1.042-7.997-0.301-10.516-3.416l-12.95-16.021c-17.47-21.61-50.385-21.569-67.82,0l-12.952,16.022
            c-2.518,3.115-6.641,4.455-10.513,3.416l-19.895-5.349c-26.844-7.212-53.441,12.168-54.869,39.864l-1.061,20.574
            c-0.206,4.001-2.757,7.511-6.497,8.944l-19.239,7.366c-25.952,9.936-36.084,41.255-20.958,64.501l11.234,17.268
            c2.185,3.358,2.185,7.698,0,11.056l-11.234,17.267c-15.157,23.294-4.942,54.585,20.958,64.501l16.696,6.392L23.96,419.018
            c-7.431,11.094,0.53,26.048,13.903,26.048h56.594l28.843,57.686c5.829,11.658,22.224,12.488,29.161,1.38l76.873-123.097
            c15.543,10.665,36.786,10.259,51.995-2.042l78.214,125.144c6.936,11.097,23.327,10.277,29.157-1.386l28.843-57.686h56.594
            C487.491,445.066,495.482,430.123,488.035,419.013z M139.885,461.085l-20.119-40.237c-2.834-5.669-8.628-9.251-14.967-9.251
            H69.216l54.735-81.703c7.083,21.62,30.03,34.585,52.742,28.476l19.895-5.349c3.339-0.896,6.861-0.014,9.383,2.241L139.885,461.085
            z M274.798,335.4l-12.95,16.02c-4.063,5.025-11.703,5.026-15.766,0l-12.95-16.02c-8.398-10.39-20.954-16.192-33.928-16.192
            c-3.763,0-7.562,0.489-11.304,1.495l-19.895,5.348c-6.244,1.68-12.422-2.818-12.755-9.266l-1.061-20.573
            c-0.884-17.133-11.839-32.307-27.956-38.477l-19.239-7.366c-6.034-2.312-8.397-9.58-4.872-14.996l11.234-17.267
            c9.399-14.446,9.399-33.115,0-47.56l-11.234-17.268c-3.524-5.414-1.164-12.683,4.871-14.993l19.239-7.366
            c16.096-6.161,27.069-21.266,27.956-38.476l1.061-20.574c0.332-6.454,6.515-10.942,12.755-9.266l19.895,5.349
            c16.645,4.475,34.398-1.294,45.231-14.696l12.952-16.022c4.061-5.024,11.702-5.024,15.765,0l12.95,16.021
            c10.835,13.402,28.585,19.172,45.232,14.696l19.895-5.348c6.235-1.679,12.421,2.812,12.755,9.266l1.06,20.574
            c0.887,17.212,11.86,32.315,27.956,38.477l19.239,7.366c6.032,2.309,8.396,9.577,4.872,14.993l-10.355,15.916
            c-9.933,15.268-9.933,34.999,0,50.266l10.355,15.915c3.523,5.415,1.162,12.683-4.872,14.994l-19.239,7.366
            c-7.334,2.808-13.587,7.487-18.325,13.362c-0.349,0.404-0.675,0.822-0.979,1.253c-5.08,6.792-8.196,15.045-8.65,23.863
            l-1.06,20.573c-0.332,6.45-6.513,10.945-12.755,9.267l-19.895-5.349C303.385,316.23,285.633,321.999,274.798,335.4z
            M407.201,411.597v0.001c-6.339,0-12.133,3.581-14.967,9.251l-20.124,40.249l-67.268-107.629c2.023-0.837,4.296-1.037,6.497-0.447
            l19.895,5.349c24.234,6.516,48.653-8.699,53.907-32.724l57.629,85.951H407.201z"
            />
            <path
              fill="#154380"
              d="M253.963,93.921c-55.363,0-100.404,45.041-100.404,100.404c0,55.363,45.041,100.404,100.404,100.404
            s100.404-45.041,100.404-100.404C354.367,138.962,309.326,93.921,253.963,93.921z M253.963,261.262
            c-36.909,0-66.936-30.028-66.936-66.936c0-36.909,30.028-66.936,66.936-66.936c36.909,0,66.936,30.028,66.936,66.936
            C320.899,231.234,290.872,261.262,253.963,261.262z"
            />
          </svg>
          <label>
            <input
              @focus="clearErrors"
              v-model="article.title"
              type="text"
              name="title"
              id="title"
              required
              placeholder=" "
            />
            <span>Title</span>
          </label>
        </div>

        <!--       <div>
        <input
          v-model="article.title"
          id="name"
          name="name"
          type="text"
          required
        />
        <label for="name">Title</label>
      </div> -->
        <div class="form__item">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="#154380"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Stroke 1"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.0003 6.6738C21.0003 8.7024 19.3551 10.3476 17.3265 10.3476C15.2979 10.3476 13.6536 8.7024 13.6536 6.6738C13.6536 4.6452 15.2979 3 17.3265 3C19.3551 3 21.0003 4.6452 21.0003 6.6738Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3467 6.6738C10.3467 8.7024 8.7024 10.3476 6.6729 10.3476C4.6452 10.3476 3 8.7024 3 6.6738C3 4.6452 4.6452 3 6.6729 3C8.7024 3 10.3467 4.6452 10.3467 6.6738Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.0003 17.2619C21.0003 19.2905 19.3551 20.9348 17.3265 20.9348C15.2979 20.9348 13.6536 19.2905 13.6536 17.2619C13.6536 15.2333 15.2979 13.5881 17.3265 13.5881C19.3551 13.5881 21.0003 15.2333 21.0003 17.2619Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Stroke 7"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3467 17.2619C10.3467 19.2905 8.7024 20.9348 6.6729 20.9348C4.6452 20.9348 3 19.2905 3 17.2619C3 15.2333 4.6452 13.5881 6.6729 13.5881C8.7024 13.5881 10.3467 15.2333 10.3467 17.2619Z"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="lang__groups">
            <span class="span__group">Groups</span>
            <ul v-if="lang.groups.length">
              <li v-for="group in lang.groups" :key="group">
                <a
                  href=""
                  @click.prevent="updateGroup(group.name)"
                  :class="selectedGroup(group.name) ? 'group' : ''"
                  >{{ group.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="form__item">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#154380"
          >
            <path
              d="M3,17 L15,17 C15.5522847,17 16,17.4477153 16,18 C16,18.5128358 15.6139598,18.9355072 15.1166211,18.9932723 L15,19 L3,19 C2.44771525,19 2,18.5522847 2,18 C2,17.4871642 2.38604019,17.0644928 2.88337887,17.0067277 L3,17 L15,17 L3,17 Z M3,13 L21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5128358 21.6139598,14.9355072 21.1166211,14.9932723 L21,15 L3,15 C2.44771525,15 2,14.5522847 2,14 C2,13.4871642 2.38604019,13.0644928 2.88337887,13.0067277 L3,13 L21,13 L3,13 Z M3,9 L21,9 C21.5522847,9 22,9.44771525 22,10 C22,10.5128358 21.6139598,10.9355072 21.1166211,10.9932723 L21,11 L3,11 C2.44771525,11 2,10.5522847 2,10 C2,9.48716416 2.38604019,9.06449284 2.88337887,9.00672773 L3,9 L21,9 L3,9 Z M3,5 L21,5 C21.5522847,5 22,5.44771525 22,6 C22,6.51283584 21.6139598,6.93550716 21.1166211,6.99327227 L21,7 L3,7 C2.44771525,7 2,6.55228475 2,6 C2,5.48716416 2.38604019,5.06449284 2.88337887,5.00672773 L3,5 L21,5 L3,5 Z"
            ></path>
          </svg>
          
          <!-- <tiptap v-model="article.description" /> -->
          <div class="art__desc">
            <span class="span__cked">Description</span>
            <QuillEditor
              theme="snow"
              v-model:content="article.description"
              contentType="html" 
              toolbar="full"
            />
            <!--           <ckeditor
            id="cked"
            class="cked"
            :editor="editor"
            v-model="article.description"
            :config="editorConfig"
          ></ckeditor> -->
          </div>

          <!--         <textarea
          v-model="article.description"
          id="desc"
          name="desc"
          rows="15"
        ></textarea> -->
          <!-- <label for="desc">Description</label> -->
        </div>
        <div class="form__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 35.033 35.033"
            style="enable-background:new 0 0 35.033 35.033;"
            xml:space="preserve"
            fill="#154380"
          >
            <path
              d="M11.811,10.535l-6.983,6.984l6.983,6.981c0.78,0.781,0.78,2.048,0,2.828c-0.392,0.392-0.901,0.586-1.414,0.586
            c-0.513,0-1.022-0.194-1.414-0.586l-8.397-8.396C0.211,18.558,0,18.049,0,17.519c0-0.529,0.211-1.039,0.586-1.414l8.397-8.398
            c0.781-0.78,2.047-0.78,2.828,0C12.591,8.488,12.591,9.752,11.811,10.535z M34.447,16.104l-8.396-8.398
            c-0.781-0.78-2.047-0.78-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l6.982,6.984L23.223,24.5c-0.781,0.781-0.781,2.048,0,2.828
            c0.392,0.392,0.902,0.586,1.414,0.586s1.023-0.194,1.414-0.586l8.396-8.396c0.375-0.375,0.586-0.884,0.586-1.414
            C35.033,16.99,34.822,16.479,34.447,16.104z M21.012,3.831c-1.076-0.277-2.161,0.373-2.435,1.441l-6,23.498
            c-0.272,1.07,0.373,2.16,1.442,2.434c0.167,0.043,0.334,0.063,0.497,0.063c0.894,0,1.706-0.603,1.937-1.505l6-23.498
            C22.727,5.193,22.081,4.104,21.012,3.831z"
            />
          </svg>
          <label for="code">
            <textarea
              v-model="article.code"
              class="coding"
              id="code"
              name="code"
              rows="15"
              placeholder=" "
            ></textarea>
            <span>Code</span>
          </label>
        </div>
        <div class="">
          <ul v-if="article.links.length" class="links__article">
            <li v-for="link in article.links" :key="link" class="links-item">
              <a href="" @click.prevent="updateLink(link)">{{ link }}</a>
              <!-- <a @click="removeLink(link)"> -->
              <button @click.prevent="removeLink(link)" class="form__btn">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="btn-svg"
                >
                  <path
                    id="Stroke 1"
                    d="M18.8892 9.5542C18.8892 17.5732 20.0435 21.198 12.2797 21.198C4.5149 21.198 5.693 17.5732 5.693 9.5542"
                    stroke="#9fc4f5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Stroke 3"
                    d="M20.3651 6.47985H4.2146"
                    stroke="#9fc4f5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Stroke 5"
                    d="M15.7148 6.47983C15.7148 6.47983 16.2434 2.71411 12.2891 2.71411C8.33578 2.71411 8.86435 6.47983 8.86435 6.47983"
                    stroke="#9fc4f5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Remove Link</span>
              </button>
              <!-- <img :src="getUrl('delete')" alt="" class="links__article-remove" -->
              <!-- /></a> -->
            </li>
          </ul>

          <div class=" form__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 493 493"
              style="enable-background:new 0 0 493 493;"
              xml:space="preserve"
              fill="#154380"
            >
              <path
                d="M215.6,314.05c6.8,6.6,14.7,12.4,23.5,16.4c2.1,1.2,4.4,1.9,6.7,2.8c2.2,0.9,4.5,1.7,6.9,2.2c2.4,0.6,4.5,1.3,7.1,1.7
              c2.6,0.4,5.2,0.8,7.8,1.1c2,0.2,3.3,0.2,4.9,0.3l2.4,0.1h1.2h2l9.5-0.1l19-0.3l38.1-0.9l38.1-1.1l9.5-0.3l4.8-0.1
              c1.6,0,3.7-0.2,5.5-0.4c7.5-0.4,14.8-2.2,21.9-4.4c26.3-5.2,50.8-24.7,61.6-51.4l2-5l1.5-5.2c1.1-3.3,1.8-7.3,2.4-11.2l0.4-2.9
              l0.2-2.2l0.3-4.3l0.1-1.1v-1.3v-0.3v-0.7l-0.1-2.7l-0.2-5.4c-1.2-14.5-6-28.7-13.6-41.1c-7.6-12.4-18.2-23-30.6-30.6l-4.7-2.8
              c-1.6-0.8-3.3-1.6-4.9-2.4c-3.2-1.7-6.7-2.9-10.1-4.1c-3.4-1.3-7-2-10.5-2.9c-3.7-0.8-8-1.3-11.7-1.7l-4.3-0.2l-2.2-0.1l-2.1-0.1
              h-1.1h-8.7h-17.3c-11.5-0.1-23.1-0.2-34.6-0.5c-4.1-0.1-10.5,3.4-12.6,5.8c-4,4.9,1.2,9,9,12.1c12.9,5.2,27.1,8.9,42.1,11.4
              c7.5,1.3,15.2,2.3,23,3h0.2c0.6,0-0.7,0-0.6,0l0,0l0,0h0.1l0.4,0.1l0.7,0.1l1.5,0.2l2.9,0.4c2.2,0.2,3.4,0.7,4.8,1
              c2.7,0.5,6,1.7,9,2.7c14.7,5.4,26.8,16.6,33.3,30.2c3.3,6.8,5.2,14.1,5.8,21.4c0.6,7.1-0.4,15.8-2.4,21.8
              c-4.1,13.9-13.6,26-25.8,33.5c-6.1,3.8-12.8,6.5-19.9,7.9c-1.8,0.2-3.5,0.8-5.4,0.8l-2.7,0.3c-0.9,0.1-1.7,0.2-3,0.2l-14.4,0.5
              c-9.5-0.4-19-0.7-28.5-1.1c-15.1-0.4-30.2-0.8-45.2-1l-22.6-0.2h-5.7h-2.7h-0.5l-1.4-0.1l-5.5-0.3c-1.1-0.2-2.2-0.4-3.3-0.6
              c-5-1-10.6-2.5-15.5-5c-4.9-2.5-9.6-5.6-13.8-9.3c-4.1-3.8-7.8-8.2-10.9-12.9c-3-4.9-5.3-10.1-7-15.7c-0.4-1.6-0.8-3.2-1.3-4.7
              s-0.7-3.1-1.2-4.5c-1-2.9-1.7-5.7-2.8-8.1c-2-4.8-4.6-8.4-9.2-8.7c-4.1-0.3-8.5,2.3-11.6,8.1c-1.6,2.9-2.8,6.5-3.3,10.7
              c-0.8,4.2-0.6,9,0.1,14.1C193.1,283.05,201.8,300.75,215.6,314.05z"
              />
              <path
                d="M65.7,198.45c6.1-3.8,12.8-6.5,19.9-7.9c1.8-0.2,3.5-0.8,5.4-0.8l2.7-0.2c0.9-0.1,1.7-0.2,3-0.2l14.4-0.5
              c9.5,0.4,19,0.7,28.5,1.1c15.1,0.4,30.2,0.8,45.2,1l22.6,0.2h5.7h2.7h0.5l1.4,0.1l5.5,0.3c1.1,0.2,2.2,0.4,3.3,0.6
              c5,1,10.6,2.5,15.5,5s9.6,5.6,13.8,9.3c4.1,3.8,7.8,8.2,10.9,12.9c3,4.9,5.3,10.1,7,15.7c0.4,1.6,0.8,3.2,1.3,4.7s0.7,3.1,1.2,4.5
              c1,2.9,1.7,5.7,2.8,8.1c2,4.8,4.6,8.4,9.2,8.7c4.1,0.3,8.5-2.3,11.6-8.1c1.6-2.9,2.8-6.5,3.3-10.7c0.8-4.2,0.6-9-0.1-14.1
              c-3-18.2-11.8-36-25.6-49.2c-6.8-6.6-14.7-12.4-23.5-16.4c-2.1-1.2-4.4-1.9-6.7-2.8c-2.2-0.9-4.5-1.7-6.9-2.2
              c-2.4-0.6-4.5-1.3-7.1-1.7s-5.2-0.8-7.8-1.1c-2-0.2-3.3-0.2-5-0.3l-2.4-0.1h-1.2h-2l-9.5,0.1l-19,0.3l-38.1,0.9l-38.1,1.1
              l-9.5,0.3l-4.8,0.1c-1.6,0-3.7,0.2-5.4,0.4c-7.5,0.4-14.8,2.2-21.9,4.4c-26.3,5.2-50.8,24.7-61.6,51.4l-2,5l-1.5,5.2
              c-1.1,3.3-1.8,7.3-2.4,11.2l-0.4,2.9l-0.2,2.2l-0.3,4.3l-0.1,1.1v1.3v0.3v0.7l0.1,2.7l0.2,5.4c1.2,14.5,6,28.7,13.6,41.1
              s18.2,23,30.6,30.6l4.7,2.8c1.6,0.8,3.3,1.6,4.9,2.4c3.2,1.7,6.7,2.9,10.1,4.1c3.4,1.3,7,2,10.5,2.9c3.7,0.8,8,1.3,11.7,1.7
              l4.3,0.2l2.2,0.1l2.1,0.1h1.1h8.7h17.3c11.5,0.1,23.1,0.2,34.6,0.5c4.1,0.1,10.5-3.4,12.6-5.8c4-4.9-1.2-9-9-12.1
              c-12.9-5.2-27.1-8.9-42.1-11.4c-7.5-1.3-15.2-2.3-23-3H95c-0.6,0,0.7,0,0.6,0l0,0l0,0h-0.1l-0.4-0.1l-0.7-0.1l-1.5-0.2l-2.9-0.4
              c-2.2-0.2-3.4-0.7-4.8-1c-2.7-0.5-6-1.7-9-2.7c-14.7-5.4-26.8-16.6-33.3-30.2c-3.3-6.8-5.2-14.1-5.8-21.4
              c-0.6-7.1,0.4-15.8,2.4-21.8C44.1,218.05,53.5,206.05,65.7,198.45z"
              />
            </svg>
            <label>
              <input
                v-model="link"
                id="link"
                name="link"
                type="text"
                required
                placeholder=" "
              />
              <span>Link</span>
            </label>
            <button @click.prevent="saveLink(link)" class="form__btn">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="btn-svg"
              >
                <path
                  id="Stroke 1"
                  d="M12.0368 8.46265V15.6111"
                  stroke="#9fc4f5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Stroke 2"
                  d="M15.6148 12.0368H8.45898"
                  stroke="#9fc4f5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Stroke 3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.30005 12.0369C2.30005 4.73479 4.73479 2.30005 12.0369 2.30005C19.339 2.30005 21.7737 4.73479 21.7737 12.0369C21.7737 19.339 19.339 21.7737 12.0369 21.7737C4.73479 21.7737 2.30005 19.339 2.30005 12.0369Z"
                  stroke="#9fc4f5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Add link</span>
            </button>
          </div>
        </div>
        <div class="frm__btn">
          <button type="submit" @click="saveArticle()" class="form__btn">
            <svg
              class="btn-svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Stroke 1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9846 21.6057C14.3196 21.6057 19.6566 19.2837 19.6566 12.8787C19.6566 6.47473 19.9346 5.97373 19.3196 5.35773C18.7036 4.74173 15.4936 2.75073 11.9846 2.75073C8.47557 2.75073 5.26557 4.74173 4.65057 5.35773C4.03457 5.97373 4.31257 6.47473 4.31257 12.8787C4.31257 19.2837 9.65057 21.6057 11.9846 21.6057Z"
                stroke="#154380"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Stroke 3"
                d="M9.38599 11.8749L11.278 13.7699L15.176 9.86987"
                stroke="#154380"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Save</span>
          </button>
          <button type="submit" @click="cancelSave()" class="form__btn">
            <svg
              class="btn-svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Stroke 1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9851 21.6057C14.3191 21.6057 19.6571 19.2837 19.6571 12.8787C19.6571 6.47473 19.9351 5.97373 19.3191 5.35773C18.7031 4.74173 15.4941 2.75073 11.9851 2.75073C8.47608 2.75073 5.26608 4.74173 4.65008 5.35773C4.03408 5.97373 4.31208 6.47473 4.31208 12.8787C4.31208 19.2837 9.65008 21.6057 11.9851 21.6057Z"
                stroke="#154380"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Stroke 3"
                d="M13.864 13.8247L10.105 10.0667"
                stroke="#154380"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Stroke 5"
                d="M10.1052 13.8247L13.8642 10.0667"
                stroke="#154380"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { isEmpty } from "../helpers/isEmptyObject";
import { getUrl } from "../helpers/getUrl";
//import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//import tiptap from '@/components/Tiptap.vue'
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "ArticleActions",

  components: {
    //tiptap,
    //ckeditor: CKEditor.component,
  },

  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        // plugins: [ Font],
        // toolbar: [
        //     'heading', 'bulletedList', 'numberedList', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'undo', 'redo'
        // ]
      },
    };
  },

  setup() {
    const router = useRouter();
    const store = useStore();
    const article = ref({
      title: "",
      description: "",
      code: "",
      langId: "",
      user: "609fa93aa271831c12d7f8d0",
      img_url: "",
      links: [],
      groups: [],
    });
    let link = ref(null);
    let edited = false;

    const lang = computed(() => store.getters.getOneLanguage);

    /*     function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    } */

    const art = computed(() => store.getters.getOneArticle);

    const selectedGroup = (group) => {
      return article.value.groups.includes(group);
    };

    const updateGroup = (group) => {
      const groupIdx = article.value.groups.indexOf(group);
      if (groupIdx >= 0) {
        article.value.groups.splice(groupIdx, 1);
      } else {
        article.value.groups.push(group);
      }
    };

    if (!isEmpty(art.value)) {
      article.value = art.value;
      edited = true;
    }

    const cancelSave = () => {
      router.push("/main");
    };

    const saveArticle = () => {
      article.value.langId = lang.value._id;
      if (!edited) {
        store.dispatch("articleAdd", article.value);
      } else {
        store.dispatch("articleUpdate", article.value);
      }
      router.push("/main");
    };

    let linkIdx = null;

    const saveLink = (links) => {
      if (!links) return;
      if (linkIdx || linkIdx === 0) {
        article.value.links[linkIdx] = link.value;
      } else {
        article.value.links.push(links);
      }
      link.value = null;
      linkIdx = null;
    };

    const updateLink = (links) => {
      link.value = links;
      linkIdx = article.value.links.indexOf(links);
    };

    const removeLink = (links) => {
      article.value.links = article.value.links.filter((a) => a !== links);
    };

    return {
      lang,
      article,
      updateGroup,
      selectedGroup,
      link,
      saveLink,
      cancelSave,
      updateLink,
      removeLink,
      saveArticle,
      getUrl,
      edited,
      QuillEditor,
    };
  },
};
</script>

<style lang="scss">
.ck-editor {
  border-radius: 0.3em !important;
  //border: 1px solid $blue-light !important;
  //-webkit-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
  //-moz-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
  //box-shadow: inset 0px 0px 2px 1px rgba(159, 196, 245, 0.75) !important;
}

.links__article {
  list-style: none;
}
.links__article li {
  cursor: pointer;
  justify-content: baseline;
}
.links__article-remove {
  width: 2em;
  height: 2em;
}
.links {
  display: grid;
  grid-template-columns: 1fr auto;
}
.ql-toolbar {
  border-radius: .3em;
  border: 1px solid $blue-light !important;
}
.ql-editor {
  border-radius: .3em;
  border: 1px solid $blue-light;
  color: $blue-darkest;
}
.ql-editor:hover {
  border: 1px solid $blue-main;
}
.ql-editor:focus {
  background: whitesmoke !important;
  border: 1px solid $blue-dark;
  box-shadow: 0px 0px 2px $blue-main inset;

}
</style>
