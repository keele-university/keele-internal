<!-- this is pulled into the homepage. The nav object will surround with ul etc -->
<li>
    <h5 class="mt-0 mb-1">    
        <a href="<t4 type="content" output="fulltext" modifiers="nav_sections" use-element="true" filename-element="hyphenated-page-slug-name" name="Event title" />">
        <t4 type="content" name="Event title" output="normal" />
        </a>
    </h5>
    <p class="font-weight-light">
        <small><t4 type="content" output="normal" modifiers="nav_sections" name="Start date" date_format="dd MMMM yyyy" /><t4 type="content" output="selective-output" process-format="true" modifiers="medialibrary, nav_sections" name="Optional end date" format=" - <t4 type=&quot;content&quot; output=&quot;normal&quot; modifiers=&quot;nav_sections&quot; name=&quot;Optional end date&quot; date_format=&quot;dd MMMM yyyy&quot; />" /></small>
    </p>
</li>