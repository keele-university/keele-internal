                    <!-- set up for the homepage pinned stories -->
                    <a href="<t4 type="content" output="fulltext" modifiers="nav_sections" use-element="true" filename-element="hyphenated-page-slug-name" name="Event title" />">
                        <li class="media">
                            <img class="mr-3 mb-4" src="<t4 type="content" name="Lead image: 960px x 640px" output="file" modifiers="" />" alt="<t4 type="content" name="Image caption" output="normal" modifiers=""  />">
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">
                                    <t4 type="content" name="Event title" output="normal" />
                                </h5>
                                <p class="font-weight-light">
                                    <small>
                                        <time class="date-label" datetime="<t4 type="content" output="normal" modifiers="nav_sections" name="Start date" date_format="yyyy-MM-dd HH:mm" />"><t4 type="content" output="normal" modifiers="nav_sections" name="Start date" date_format="dd MMMM yyyy" /></time> <t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Optional end date" format=" - <t4 type=&quot;content&quot; output=&quot;normal&quot; modifiers=&quot;nav_sections&quot; name=&quot;Optional end date&quot; date_format=&quot;dd MMMM yyyy&quot; />" />
                                    </small>
                                </p>
                            </div>
                        </li>
                    </a>