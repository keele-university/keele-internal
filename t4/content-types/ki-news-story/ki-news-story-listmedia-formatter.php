                    <!-- set up for the homepage pinned stories -->
                    <a href="<t4 type="content" output="fulltext" modifiers="nav_sections" use-element="true" filename-element="hyphenated-page-slug-name" name="News title" />">
                        <li class="media">
                            <img class="mr-3 mb-4" src="<t4 type="content" name="Lead image: 960px x 640px" output="file" modifiers="" />" alt="<t4 type="content" name="Image caption" output="normal" modifiers=""  />">
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">
                                    <t4 type="content" name="News title" output="normal" />
                                </h5>
                                <t4 type="content" output="selective-output" name="News summary snippet" format="<p class=&quot;mb-0&quot;>
                                    $value
                                </p>" />
                                <p class="font-weight-light">
                                    <small>
                                        <time class="date-label" datetime="<t4 type="content" output="normal" modifiers="nav_sections" name="Display date released" date_format="yyyy-MM-dd HH:mm" />"><t4 type="content" output="normal" modifiers="nav_sections" name="Display date released" date_format="dd MMMM yyyy" /></time>
                                    </small>
                                </p>
                            </div>
                        </li>
                    </a>