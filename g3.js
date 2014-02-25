// Made By Crazy4Redstone!!!

// Variables:

var Damage = Level.getData (x,y,z)

// Blocks:

Block.defineBlock (55,"Redstone_Off",[["redstone_dust_cross",0]],19,false,13)
Block.setShape (55,0,0,0,1,1/16,1)
Block.setDestroyTime (55,0.01)
Block.setColor (55,[0x440000])
Block.setRenderLayer (55,2)

Block.defineBlock (100,"Redstone_Off",[["redstone_dust_cross",0]],19,false,13)
Block.setShape (100,0,0,0,1,1/16,1)
Block.setDestroyTime (100,0.01)
Block.setColor (100,[0xFD0000])
Block.setRenderLayer (100,2)

Block.defineBlock (69,"Lever",[["lever",0]],19,false,13)
Block.setDestroyTime (69,0.01)
Block.setRenderLayer (69,1)

// Functions:

function useItem (x,y,z,i,b,side)
{
if (b == 69 && Damage == 0)
  {
	setTile (x,y,z,69,1)
	TestDust (x-1,y,z,true)
	TestDust (x+1,y,z,true)
	TestDust (x,y,z-1,true)
	TestDust (x,y,z+1,true)
	TestDust (x,y-2,z,true)
  }
if (b == 69 && Damage == 1)
  {
	setTile (x,y,z,69,0)
	TestDust (x-1,y,z,false)
	TestDust (x+1,y,z,false)
	TestDust (x,y,z-1,false)
	TestDust (x,y,z+1,false)
	TestDust (x,y-2,z,false)
  }
}
function TestDust (x,y,z,mode)
{
if (getTile (x,y,z) == 55 && mode)
  {
    setTile (x,y,z,100)
	TestDust (x-1,y,z,true)
	TestDust (x+1,y,z,true)
	TestDust (x,y,z-1,true)
	TestDust (x,y,z+1,true)
  }
if (getTile (x,y,z) == 100 && mode)
  {
	setTile (x,y,z,55)
	TestDust (x-1,y,z,false)
	TestDust (x+1,y,z,false)
	TestDust (x,y,z-1,false)
	TestDust (x,y,z+1,false)
  }
}  
	
	

