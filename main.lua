local display = false
local msg = false
local msgdata = 0
local cbdata = 0


RegisterNetEvent('nz_ui_enter')
AddEventHandler('nz_ui_enter', function (text, cb)
	SetDisplay(not display, text)
	cbdata = cb
end)

Citizen.CreateThread(function()
	while true do
		Citizen.Wait(1000)
		if msg then
			menu(cbdata)
		end
	end
end)

function SetDisplay(bool, text)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
        text = text,
    })
end

function menu(cb)
	cb(msgdata)
	msg = false
end

RegisterNUICallback("exit", function(data)
    SetDisplay(false)
end)

RegisterNUICallback("main", function(data)
	msg = true
	msgdata = data.msg
    SetDisplay(false)
end)