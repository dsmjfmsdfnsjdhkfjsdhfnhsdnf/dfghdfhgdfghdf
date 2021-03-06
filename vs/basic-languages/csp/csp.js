

    <browser id="PlatformUNIX" parentID="Platform">
        <identification>
            <userAgent match="X11" />
        </identification>

        <capture>
        </capture>

        <capabilities>
            <capability name="platform"    value="UNIX" />
        </capabilities>
    </browser>

    <browser id="PlatformWebTV" parentID="Platform">
        <identification>
            <userAgent match="WebTV" />
        </identification>

        <capture>
        </capture>

        <capabilities>
            <capability name="platform"    value="WebTV" />
        </capabilities>
    </browser>

    <gateway id="Win" parentID="Default">
        <identification>
            <userAgent match="." />
        </identification>

        <capture>
        </capture>

        <capabilities>
        </capabilities>
    </gateway>

    <browser id="Win32" parentID="Win">
        <identification>
            <userAgent match="Win(dows )?(9[58]|NT|32)" />
        </identification>

        <capture>
        </capture>

        <capabilities>
            <capability name="win32"   value="true" />
        </capabilities>
    </browser>

    <browser id="Win16" parentID="Win">
        <identification>
            <userAgent match="16bit|Win(dows 3\.1|16)" />
        </identification>

        <capture>
        </capture>

        <capabilities>
            <capability name="win16"   value="true" />
        </capabilities>
    </browser>

</browsers>
   	<ReservedWord>CASCADE</ReservedWord>
	</ReservedWords>
	<ReservedWords>
		<ReservedWord>CASCADED</ReservedWord>
	</ReservedWords>
	<ReservedWords>
		<ReservedWord>CASE</ReservedWord>
	</ReservedWords>
	<ReservedWords>
		<ReservedWord>CAST</ReservedWord>