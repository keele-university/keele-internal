                    <!-- set up for the homepage pinned UEC story. Works in a similar way to standard ki- News story -->
                    <a href="<t4 type="content" output="fulltext" modifiers="nav_sections" use-element="true" filename-element="hyphenated-page-slug-name" name="News title" />">
                        <li class="media mb-3">
                            <img class="ki-uec__img mr-3 rounded d-none d-md-block" src="<t4 type="content" name="Lead image: 960px x 300px" output="file" modifiers="" />" alt="<t4 type="content" name="Image caption" output="normal" modifiers=""  />">
                            <div class="media-body">
                                <h2 class="mt-0 mb-1">
                                    <t4 type="content" name="News title" output="normal" />
                                </h2>
                                <t4 type="content" output="selective-output" name="News summary snippet" format="<p class=&quot;mb-0 d-none d-md-block&quot;>
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