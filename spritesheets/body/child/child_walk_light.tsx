<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.2" tiledversion="1.2.0" name="child" tilewidth="64" tileheight="64" tilecount="36" columns="9">
 <properties>
  <property name="author" value="nila122"/>
  <property name="basedOn" value="ChildStanding.tsx"/>
  <property name="category" value="body"/>
  <property name="filter_sex" type="int" value="3"/>
  <property name="license" value="CC BY-SA 3.0;GNU GPL 3.0;GNU GPL 2.0"/>
  <property name="palette" value="skin/ivory"/>
  <property name="title" value="LPC children walk animation"/>
  <property name="url" value="https://opengameart.org/content/lpc-children-walk-animation"/>
 </properties>
 <image source="child_walk_light.png" width="576" height="256"/>
 <tile id="0">
  <properties>
   <property name="animation" value="wc"/>
   <property name="direction" type="int" value="2"/>
  </properties>
 </tile>
 <tile id="9">
  <properties>
   <property name="animation" value="wc"/>
   <property name="direction" type="int" value="3"/>
  </properties>
 </tile>
 <tile id="18">
  <properties>
   <property name="animation" value="wc"/>
   <property name="direction" type="int" value="0"/>
  </properties>
 </tile>
 <tile id="27">
  <properties>
   <property name="animation" value="wc"/>
   <property name="direction" type="int" value="1"/>
  </properties>
 </tile>
</tileset>
